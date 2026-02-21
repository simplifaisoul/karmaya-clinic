import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-neutral-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Contact Info */}
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
                            Get Involved
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Contact Us</h2>
                        <p className="text-base md:text-lg text-neutral-500 mb-8 leading-relaxed">
                            Whether you want to volunteer, donate, or partner with us, we'd love to hear from you.
                            Together, we can expand our reach to more underserved communities.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-sm mb-0.5">Locations</h4>
                                    <p className="text-neutral-500 text-sm">Pilot Clinic: Philippines</p>
                                    <p className="text-neutral-500 text-sm">Upcoming: Cebu Expansion</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-sm mb-0.5">Email Us</h4>
                                    <p className="text-neutral-500 text-sm">info@karmayaclinics.org</p>
                                    <p className="text-neutral-500 text-sm">partnerships@karmayaclinics.org</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-5 md:p-7 rounded-xl border border-neutral-100 shadow-premium">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-1.5">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm">
                                    <option>MicroClinic Inquiry</option>
                                    <option>Volunteering</option>
                                    <option>Donation</option>
                                    <option>Partnership</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm resize-none" placeholder="How can we help?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
