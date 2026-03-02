import { useEffect } from 'react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

const GoogleTranslateWidget = ({ isMobile = false }: { isMobile?: boolean }) => {
    const id = isMobile ? 'google_translate_element_mobile' : 'google_translate_element_desktop';

    useEffect(() => {
        const initWidget = () => {
            if (window.google?.translate?.TranslateElement) {
                const element = document.getElementById(id);
                if (element && !element.hasChildNodes()) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false,
                        },
                        id
                    );
                }
            }
        };

        // Set up global callback
        window.googleTranslateElementInit = initWidget;

        if (!document.getElementById('google-translate-script')) {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            addScript.async = true;
            document.body.appendChild(addScript);
        } else {
            // Script already loaded, try initializing directly
            initWidget();
        }

        // Fallback polling in case callback fires before component mounts
        const interval = setInterval(() => {
            const element = document.getElementById(id);
            if (element && element.hasChildNodes()) {
                clearInterval(interval);
                return;
            }
            initWidget();
        }, 800);

        return () => clearInterval(interval);
    }, [id]);

    return (
        <div id={id} className="google-translate-container text-xs" />
    );
};

export default GoogleTranslateWidget;
