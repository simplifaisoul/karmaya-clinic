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
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20 font-sans transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <Heart className="h-8 w-8 text-action fill-current" />
                            <span className="font-heading font-bold text-2xl text-secondary tracking-tight">
                                Karmaya<span className="text-primary">Clinics</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            link.isPage ? (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className="font-bold text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wide text-sm"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <HashLink
                                    key={link.name}
                                    smooth
                                    to={link.to}
                                    className="font-bold text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-wide text-sm"
                                >
                                    {link.name}
                                </HashLink>
                            )
                        ))}
                        <div className="scale-90 origin-right">
                            <GoogleTranslate />
                        </div>
                        <HashLink smooth to="/#contact" className="bg-action hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg uppercase tracking-wide text-sm whitespace-nowrap">
                            Contact Us
                        </HashLink>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        <div className="scale-75 origin-right">
                            <GoogleTranslate />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
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
                        className="md:hidden bg-secondary text-white absolute w-full top-20 left-0 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-1">
                            {navLinks.map((link) => (
                                link.isPage ? (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        className="block px-4 py-4 text-lg font-bold border-b border-white/10 hover:bg-white/10 transition-colors uppercase tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <HashLink
                                        key={link.name}
                                        smooth
                                        to={link.to}
                                        className="block px-4 py-4 text-lg font-bold border-b border-white/10 hover:bg-white/10 transition-colors uppercase tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </HashLink>
                                )
                            ))}
                            <HashLink
                                smooth
                                to="/#contact"
                                className="block px-4 py-4 text-lg font-bold text-action bg-white mt-4 text-center uppercase tracking-wide rounded-sm"
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
