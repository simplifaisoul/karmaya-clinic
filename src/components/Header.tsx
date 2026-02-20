import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Mission', to: '/#mission' },
        { name: 'Our Work', to: '/#pillars' },
        { name: 'Impact', to: '/#gallery' },
        { name: 'Partners', to: '/#innovation' },
        { name: 'Resources', to: '/resources', isPage: true },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <Heart className="h-8 w-8 text-blue-600 fill-current group-hover:scale-110 transition-transform" />
                            <span className="font-heading font-bold text-2xl text-neutral-900 tracking-tight">
                                Karmaya<span className="text-blue-600">Clinics</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.isPage ? (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm relative group"
                                >
                                    {link.name}
                                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </Link>
                            ) : (
                                <HashLink
                                    key={link.name}
                                    smooth
                                    to={link.to}
                                    className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200 text-sm relative group"
                                >
                                    {link.name}
                                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </HashLink>
                            )
                        ))}
                        <div className="scale-90 origin-right">
                            <GoogleTranslate isMobile={false} />
                        </div>
                        <HashLink smooth to="/#contact" className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-sm hover:shadow-md text-sm whitespace-nowrap">
                            Contact Us
                        </HashLink>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <div className="scale-75 origin-right">
                            <GoogleTranslate isMobile={true} />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-900 hover:bg-neutral-100 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-neutral-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link) => (
                                link.isPage ? (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        className="block px-4 py-4 text-lg font-bold text-neutral-800 hover:bg-neutral-50 rounded-xl transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <HashLink
                                        key={link.name}
                                        smooth
                                        to={link.to}
                                        className="block px-4 py-4 text-lg font-bold text-neutral-800 hover:bg-neutral-50 rounded-xl transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </HashLink>
                                )
                            ))}
                            <HashLink
                                smooth
                                to="/#contact"
                                className="block px-4 py-4 text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 mt-4 text-center rounded-xl shadow-sm transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </HashLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
