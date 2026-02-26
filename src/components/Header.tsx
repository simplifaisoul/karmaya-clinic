import { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleTranslate from './GoogleTranslate';

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
        { name: 'Resources', to: '/resources' },
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
                        <div className="hidden lg:flex items-center gap-4">
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

                            {/* Translate Toggle */}
                            <div className="relative">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowTranslate(!showTranslate); }}
                                    className={`flex items-center gap-1 font-medium text-sm transition-colors ${showDark ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'
                                        }`}
                                    aria-label="Translate this page"
                                >
                                    🌐
                                    <ChevronDown className={`w-3 h-3 transition-transform ${showTranslate ? 'rotate-180' : ''}`} />
                                </button>
                                {showTranslate && (
                                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 p-3 min-w-[200px] z-50" onClick={(e) => e.stopPropagation()}>
                                        <p className="text-xs font-semibold text-neutral-500 mb-2">Translate Page</p>
                                        <GoogleTranslate isMobile={false} />
                                    </div>
                                )}
                            </div>

                            {/* Auth Button */}
                            {!loading && (
                                user ? (
                                    <Link to="/dashboard" className="flex items-center gap-2 ml-1">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold overflow-hidden border-2 border-white shadow-sm">
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
                                        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-1.5 ${showDark
                                            ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
                                            : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg'
                                            }`}
                                    >
                                        <UserCircle className="w-4 h-4" /> Sign In
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Mobile controls */}
                        <div className="flex lg:hidden items-center gap-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowTranslate(!showTranslate); }}
                                className={`p-2 rounded-lg transition-colors ${showDark ? 'text-neutral-600' : 'text-white/70'}`}
                                aria-label="Translate"
                            >
                                🌐
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative z-50 p-2 rounded-lg transition-colors ${isOpen ? 'text-white' : showDark ? 'text-neutral-900' : 'text-white'}`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {showTranslate && (
                        <div className="lg:hidden bg-white rounded-xl shadow-lg border border-neutral-200 p-3 mb-2" onClick={(e) => e.stopPropagation()}>
                            <p className="text-xs font-semibold text-neutral-500 mb-2">Translate Page</p>
                            <GoogleTranslate isMobile={true} />
                        </div>
                    )}
                </div>
            </nav>

            {/* Full-Screen Mobile Drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-neutral-900 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
                <div className={`relative h-full flex flex-col items-center justify-center gap-5 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className={`text-2xl font-bold transition-colors ${location.pathname === link.to ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                            onClick={() => setIsOpen(false)}
                            style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Auth in mobile drawer */}
                    <div className="mt-4">
                        {user ? (
                            <Link to="/dashboard" className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-bold text-base hover:bg-neutral-100 transition-all flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <UserCircle className="w-5 h-5" /> My Dashboard
                            </Link>
                        ) : (
                            <Link to="/signin" className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-bold text-base hover:bg-neutral-100 transition-all flex items-center gap-2" onClick={() => setIsOpen(false)}>
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
