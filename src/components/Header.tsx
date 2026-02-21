import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Mission', to: '/#mission' },
        { name: 'Our Work', to: '/#pillars' },
        { name: 'Impact', to: '/#gallery' },
        { name: 'Exchange', to: '/#join-hub' },
        { name: 'Resources', to: '/resources', isPage: true },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm'
                    : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 group relative z-50">
                            <Heart className={`h-7 w-7 fill-current transition-colors ${scrolled ? 'text-blue-600' : 'text-white'}`} />
                            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
                                Karmaya<span className="text-blue-500">Clinics</span>
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                link.isPage ? (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        className={`font-medium text-sm transition-colors link-hover-underline ${scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <HashLink
                                        key={link.name}
                                        smooth
                                        to={link.to}
                                        className={`font-medium text-sm transition-colors link-hover-underline ${scrolled ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </HashLink>
                                )
                            ))}
                            <div className="scale-90">
                                <GoogleTranslate isMobile={false} />
                            </div>
                            <HashLink
                                smooth
                                to="/#contact"
                                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${scrolled
                                        ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
                                        : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg'
                                    }`}
                            >
                                Contact Us
                            </HashLink>
                        </div>

                        <div className="flex md:hidden items-center gap-3">
                            <div className="scale-75 origin-right">
                                <GoogleTranslate isMobile={true} />
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative z-50 p-2 rounded-lg transition-colors ${isOpen ? 'text-white' : scrolled ? 'text-neutral-900' : 'text-white'
                                    }`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Drawer */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'
                }`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-neutral-900 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Content */}
                <div className={`relative h-full flex flex-col items-center justify-center gap-6 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    {navLinks.map((link, i) => (
                        link.isPage ? (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <HashLink
                                key={link.name}
                                smooth
                                to={link.to}
                                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                            >
                                {link.name}
                            </HashLink>
                        )
                    ))}

                    <div className="mt-4">
                        <HashLink
                            smooth
                            to="/#contact"
                            className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-bold text-base hover:bg-neutral-100 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </HashLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
