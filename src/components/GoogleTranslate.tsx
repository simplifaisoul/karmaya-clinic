import { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'tl', name: 'Tagalog', flag: 'PH' },
    { code: 'ceb', name: 'Cebuano', flag: 'PH' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'zh-CN', name: '中文', flag: 'CN' },
    { code: 'ar', name: 'العربية', flag: 'SA' },
    { code: 'ko', name: '한국어', flag: 'KR' },
    { code: 'ja', name: '日本語', flag: 'JP' },
];

// Load the Google Translate script once globally
let scriptLoaded = false;
function ensureGoogleTranslateScript() {
    if (scriptLoaded) return;
    scriptLoaded = true;

    // Hidden container for the widget (Google needs this)
    if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
    }

    // Init callback
    (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false, includedLanguages: 'en,tl,ceb,es,fr,zh-CN,ar,ko,ja' },
            'google_translate_element'
        );
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
}

function triggerTranslation(langCode: string) {
    // Set cookies for Google Translate
    const value = langCode === 'en' ? '' : `/en/${langCode}`;
    document.cookie = `googtrans=${value}; path=/;`;
    document.cookie = `googtrans=${value}; path=/; domain=.${window.location.hostname}`;

    // Try to use the Google Translate select element directly
    const frame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
    if (frame?.contentDocument) {
        const links = frame.contentDocument.querySelectorAll('a.goog-te-menu2-item');
        for (const link of Array.from(links)) {
            const span = link.querySelector('.text');
            if (span && (link as HTMLElement).getAttribute('href')?.includes(langCode)) {
                (link as HTMLElement).click();
                return;
            }
        }
    }

    // Fallback: find the combo box Google Translate injects and change its value
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event('change'));
        return;
    }

    // Last resort: reload with cookies set
    window.location.reload();
}

const LanguageSelector = () => {
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            ensureGoogleTranslateScript();
        }
    }, []);

    const handleTranslate = (langCode: string) => {
        if (langCode === 'en') {
            // Reset translation
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;

            // Try using the restore button
            const banner = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
            if (banner?.contentDocument) {
                const close = banner.contentDocument.querySelector('.goog-close-link') as HTMLElement;
                if (close) { close.click(); return; }
            }

            // Fallback: reset combo
            const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (combo) {
                combo.value = 'en';
                combo.dispatchEvent(new Event('change'));
                return;
            }

            window.location.reload();
            return;
        }

        triggerTranslation(langCode);
    };

    return (
        <>
            <div className="grid gap-0.5">
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        onClick={() => handleTranslate(lang.code)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-left w-full active:bg-blue-100"
                    >
                        <span className="text-[11px] font-bold text-neutral-400 w-5 text-center">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </button>
                ))}
            </div>
        </>
    );
};

export { Globe };
export default LanguageSelector;
