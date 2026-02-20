
import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 text-white tracking-tight">
                            Karmaya<span className="text-blue-400">Clinics</span>
                        </h2>
                        <p className="text-neutral-400 max-w-sm mb-6">
                            "People helping people" through positive energy and tangible action. Providing holistic primary care to underserved communities worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-neutral-700 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-neutral-700 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-neutral-800 p-2.5 rounded-full hover:bg-neutral-700 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-neutral-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><HashLink smooth to="/#mission" className="text-neutral-400 hover:text-white transition-colors">Our Mission</HashLink></li>
                            <li><HashLink smooth to="/#pillars" className="text-neutral-400 hover:text-white transition-colors">Our Work</HashLink></li>
                            <li><HashLink smooth to="/#innovation" className="text-neutral-400 hover:text-white transition-colors">Partners</HashLink></li>
                            <li><HashLink smooth to="/#gallery" className="text-neutral-400 hover:text-white transition-colors">Impact</HashLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-neutral-700 pb-2 inline-block">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-neutral-400">Philippines (Pilot) | Cebu (Upcoming)</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                                <a href="mailto:info@karmayaclinics.org" className="text-neutral-400 hover:text-white transition-colors">info@karmayaclinics.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Karmaya MicroClinics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
