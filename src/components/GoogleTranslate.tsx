import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const LanguageSelector = () => {
    const handleTranslate = (langCode: string) => {
        if (langCode === 'en') {
            // Remove any existing translation
            const frame = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
            if (frame) {
                const body = frame.contentDocument?.querySelector('.goog-close-link') as HTMLElement;
                body?.click();
            }
            // Clear Google Translate cookie
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
            window.location.reload();
            return;
        }

        // Set translation cookie and reload
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;

        // If Google Translate script isn't loaded yet, load it
        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            (window as any).googleTranslateElementInit = () => {
                new (window as any).google.translate.TranslateElement(
                    { pageLanguage: 'en', autoDisplay: false },
                    'google_translate_element_hidden'
                );
            };
        }

        window.location.reload();
    };

    return (
        <>
            {/* Hidden element for Google Translate to attach to */}
            <div id="google_translate_element_hidden" className="hidden" />

            <div className="grid gap-1">
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        onClick={() => handleTranslate(lang.code)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-left w-full"
                    >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </button>
                ))}
            </div>
        </>
    );
};

export { Globe };
export default LanguageSelector;
