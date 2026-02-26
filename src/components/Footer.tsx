import { Heart, Mail, MapPin, Facebook, Instagram, Twitter, ArrowRight, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
    const { user } = useAuth();

    return (
        <footer className="bg-neutral-900 text-white relative overflow-hidden">
            {/* CTA Banner */}
            <div className="relative z-10 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                Ready to make a difference?
                            </h3>
                            <p className="text-neutral-400 text-sm md:text-base">
                                Join 1,000+ community members building a healthier world together.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {user ? (
                                <Link
                                    to="/dashboard"
                                    className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all flex items-center gap-2 group shadow-lg whitespace-nowrap"
                                >
                                    My Dashboard
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <Link
                                    to="/signin"
                                    className="px-8 py-3.5 bg-white text-neutral-900 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all flex items-center gap-2 group shadow-lg whitespace-nowrap"
                                >
                                    Join Our Mission
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="h-6 w-6 text-blue-400 fill-current" />
                            <span className="font-bold text-xl text-white tracking-tight">
                                Karmaya<span className="text-blue-400">Clinics</span>
                            </span>
                        </div>
                        <p className="text-neutral-400 text-sm max-w-sm mb-5 leading-relaxed">
                            "People helping people" through positive energy and tangible action.
                            Holistic primary care for underserved communities across the Philippines.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Twitter, label: 'Twitter' }
                            ].map(({ icon: Icon, label }) => (
                                <a key={label} href="#" aria-label={label} className="bg-neutral-800 p-2.5 rounded-lg hover:bg-neutral-700 hover:text-blue-400 transition-all">
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigate</h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'About Us', to: '/about' },
                                { name: 'Our Team', to: '/team' },
                                { name: '9 Steps', to: '/pillars' },
                                { name: 'Gallery', to: '/gallery' },
                                { name: 'Exchange Center', to: '/exchange' },
                                { name: 'Service Directory', to: '/directory' },
                                { name: 'Resources', to: '/resources' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.to} className="text-neutral-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Account */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-400 text-sm">Philippines (Pilot)<br />Cebu (Upcoming)</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                <a href="mailto:info@karmayaclinics.org" className="text-neutral-400 hover:text-white text-sm transition-colors">
                                    info@karmayaclinics.org
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 space-y-2">
                            <Link to="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors flex items-center gap-1">
                                Contact Us <ArrowRight className="w-3 h-3" />
                            </Link>
                            {user ? (
                                <Link to="/dashboard" className="text-neutral-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
                                    <UserCircle className="w-3.5 h-3.5" /> My Dashboard
                                </Link>
                            ) : (
                                <Link to="/signin" className="text-neutral-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
                                    <UserCircle className="w-3.5 h-3.5" /> Sign In / Create Account
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-neutral-500 text-xs">
                        &copy; {new Date().getFullYear()} Karmaya Clinics. All rights reserved.
                    </p>
                    <p className="text-neutral-600 text-xs">
                        Built with ❤️ for humanity
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
