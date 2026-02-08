import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Mission', href: '#mission' },
        { name: 'The 9 Pillars', href: '#pillars' },
        { name: 'Innovation', href: '#innovation' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Heart className="h-8 w-8 text-action fill-current" />
                        <span className="font-heading font-bold text-2xl text-primary-dark tracking-tight">
                            Karmaya<span className="text-secondary-dark">Clinics</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-medium text-neutral-800 hover:text-primary transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#donate" className="bg-action hover:bg-red-600 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md">
                                Donate
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                        className="md:hidden bg-white border-t border-neutral-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary hover:bg-neutral-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#donate" className="block w-full text-center mt-4 bg-action text-white px-5 py-3 rounded-full font-bold">
                                Donate
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
