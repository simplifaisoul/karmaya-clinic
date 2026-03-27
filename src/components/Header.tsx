import { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown, UserCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LanguageSelector from './GoogleTranslate';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTranslate, setShowTranslate] = useState(false);
    const { user, profile, loading } = useAuth();
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

    useEffect(() => {
        if (!showTranslate) return;
        const handleClick = () => setShowTranslate(false);
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [showTranslate]);

    const showDark = scrolled || !isHome;

    const navLinks = [
        { name: 'About', to: '/about' },
        { name: 'Team', to: '/team' },
        { name: '9 Steps', to: '/pillars' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Exchange', to: '/exchange' },
        { name: 'MicroClinic', to: '/microclinic' },
        { name: 'Resources', to: '/resources' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${showDark
                ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm'
                : 'bg-gradient-to-b from-black/30 to-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-[68px]">
                        <Link to="/" className="flex items-center gap-2.5 group relative z-50">
                            <Heart className={`h-7 w-7 fill-current transition-colors ${showDark ? 'text-blue-600' : 'text-white'}`} />
                            <span className={`font-bold text-xl tracking-tight transition-colors ${showDark ? 'text-neutral-900' : 'text-white'}`}>
                                Karmaya<span className={`transition-colors ${showDark ? 'text-blue-500' : 'text-blue-200'}`}>Clinics</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${location.pathname === link.to
                                            ? (showDark ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/15')
                                            : (showDark ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100' : 'text-white/80 hover:text-white hover:bg-white/10')
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="w-px h-5 mx-2 bg-neutral-300/50" />

                            {/* Translate Toggle */}
                            <div className="relative">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowTranslate(!showTranslate); }}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${
                                        showTranslate
                                            ? (showDark ? 'bg-blue-50 text-blue-600' : 'bg-white/20 text-white')
                                            : (showDark ? 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100' : 'text-white/70 hover:text-white hover:bg-white/10')
                                    }`}
                                    aria-label="Translate this page"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span className="hidden xl:inline">Translate</span>
                                    <ChevronDown className={`w-3 h-3 transition-transform ${showTranslate ? 'rotate-180' : ''}`} />
                                </button>
                                {showTranslate && (
                                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-neutral-200/80 p-2 min-w-[200px] z-50 animate-in fade-in slide-in-from-top-2" onClick={(e) => e.stopPropagation()}>
                                        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 pt-1 pb-2">Select Language</p>
                                        <LanguageSelector />
                                    </div>
                                )}
                            </div>

                            {/* Contact */}
                            <Link
                                to="/contact"
                                className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${location.pathname === '/contact'
                                    ? (showDark ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/15')
                                    : (showDark ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100' : 'text-white/80 hover:text-white hover:bg-white/10')
                                }`}
                            >
                                Contact
                            </Link>

                            {/* Auth Button */}
                            {!loading && (
                                user ? (
                                    <Link to="/dashboard" className="flex items-center gap-2 ml-2">
                                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden border-2 border-white shadow-md ring-2 ring-blue-100">
                                            {profile?.photoURL ? (
                                                <img src={profile.photoURL} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                profile?.displayName?.charAt(0)?.toUpperCase() || 'U'
                                            )}
                                        </div>
                                    </Link>
                                ) : (
                                    <Link
                                        to="/signin"
                                        className="ml-2 px-5 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-1.5 bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 hover:shadow-lg"
                                    >
                                        <UserCircle className="w-4 h-4" /> Sign In
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Mobile controls */}
                        <div className="flex lg:hidden items-center gap-1">
                            {/* Translate button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowTranslate(!showTranslate); }}
                                className={`p-2.5 rounded-lg transition-all ${
                                    showTranslate
                                        ? (showDark ? 'bg-blue-50 text-blue-600' : 'bg-white/20 text-white')
                                        : (showDark ? 'text-neutral-500 hover:bg-neutral-100' : 'text-white/80 hover:bg-white/10')
                                }`}
                                aria-label="Translate"
                            >
                                <Globe className="w-5 h-5" />
                            </button>
                            {/* Menu button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative z-50 p-2.5 rounded-lg transition-colors ${isOpen ? 'text-white' : showDark ? 'text-neutral-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile translate dropdown */}
                    {showTranslate && (
                        <div className="lg:hidden bg-white rounded-xl shadow-xl border border-neutral-200/80 p-2 mb-3 animate-in fade-in slide-in-from-top-2" onClick={(e) => e.stopPropagation()}>
                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 pt-1 pb-2">Select Language</p>
                            <LanguageSelector />
                        </div>
                    )}
                </div>
            </nav>

            {/* Full-Screen Mobile Drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-neutral-900 via-blue-950 to-neutral-900 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
                <div className={`relative h-full flex flex-col items-center justify-center gap-5 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className={`text-2xl font-bold transition-all ${location.pathname === link.to ? 'text-blue-400 scale-105' : 'text-white/80 hover:text-white hover:scale-105'}`}
                            onClick={() => setIsOpen(false)}
                            style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        className={`text-2xl font-bold transition-all ${location.pathname === '/contact' ? 'text-blue-400 scale-105' : 'text-white/80 hover:text-white hover:scale-105'}`}
                        onClick={() => setIsOpen(false)}
                        style={{ transitionDelay: isOpen ? `${navLinks.length * 60}ms` : '0ms' }}
                    >
                        Contact
                    </Link>

                    {/* Auth in mobile drawer */}
                    <div className="mt-6" style={{ transitionDelay: isOpen ? `${(navLinks.length + 1) * 60}ms` : '0ms' }}>
                        {user ? (
                            <Link to="/dashboard" className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-bold text-base hover:bg-neutral-100 transition-all flex items-center gap-2 shadow-lg" onClick={() => setIsOpen(false)}>
                                <UserCircle className="w-5 h-5" /> My Dashboard
                            </Link>
                        ) : (
                            <Link to="/signin" className="px-8 py-3.5 bg-blue-500 text-white rounded-full font-bold text-base hover:bg-blue-400 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30" onClick={() => setIsOpen(false)}>
                                <UserCircle className="w-5 h-5" /> Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
