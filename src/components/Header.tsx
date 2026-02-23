import { useState, useEffect } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // On non-home pages, always show scrolled (white bg) style
    const showDark = scrolled || !isHome;

    const navLinks = [
        { name: 'About', to: '/about' },
        { name: '9 Steps', to: '/pillars' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Exchange', to: '/exchange' },
        { name: 'Resources', to: '/resources' },
        { name: 'Contact', to: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${showDark
                ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 group relative z-50">
                            <Heart className={`h-7 w-7 fill-current transition-colors ${showDark ? 'text-blue-600' : 'text-white'}`} />
                            <span className={`font-bold text-xl tracking-tight transition-colors ${showDark ? 'text-neutral-900' : 'text-white'}`}>
                                Karmaya<span className={`transition-colors ${showDark ? 'text-blue-500' : 'text-blue-100'}`}>Clinics</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className={`font-medium text-sm transition-colors link-hover-underline ${location.pathname === link.to
                                            ? (showDark ? 'text-blue-600' : 'text-white')
                                            : (showDark ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white')
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Google Translate with icon */}
                            <div className="flex items-center gap-1.5 ml-1">
                                <Globe className={`w-3.5 h-3.5 ${showDark ? 'text-neutral-400' : 'text-white/50'}`} />
                                <div className="scale-90">
                                    <GoogleTranslate isMobile={false} />
                                </div>
                            </div>
                        </div>

                        {/* Mobile controls */}
                        <div className="flex lg:hidden items-center gap-2">
                            <div className="flex items-center gap-1">
                                <Globe className={`w-3.5 h-3.5 ${showDark ? 'text-neutral-400' : 'text-white/50'}`} />
                                <div className="scale-75 origin-left">
                                    <GoogleTranslate isMobile={true} />
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative z-50 p-2 rounded-lg transition-colors ${isOpen ? 'text-white' : showDark ? 'text-neutral-900' : 'text-white'}`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
                <div
                    className={`absolute inset-0 bg-neutral-900 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />
                <div className={`relative h-full flex flex-col items-center justify-center gap-5 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className={`text-2xl font-bold transition-colors ${location.pathname === link.to ? 'text-blue-400' : 'text-white hover:text-blue-400'
                                }`}
                            onClick={() => setIsOpen(false)}
                            style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
