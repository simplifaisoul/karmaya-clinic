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

        if (!document.getElementById('google-translate-script')) {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            addScript.async = true;
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = () => {
                // Global init callback - we leave it empty as we poll/check in individual components
            };
        }

        // Poll for library load to ensure widget initializes even if callback is missed or component mounts late
        const interval = setInterval(initWidget, 500);
        return () => clearInterval(interval);
    }, [id]);

    return (
        <div id={id} className="google-translate-container text-xs" />
    );
};

export default GoogleTranslateWidget;
