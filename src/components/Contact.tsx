
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-secondary font-bold tracking-wide uppercase mb-2">Get Involved</h2>
                        <h3 className="text-4xl font-heading font-bold text-neutral-900 mb-6">Join Our Mission</h3>
                        <p className="text-neutral-600 text-lg mb-8">
                            Whether you want to volunteer, donate, or partner with us, we'd love to hear from you.
                            Together, we can expand our reach to more underserved communities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Locations</h4>
                                    <p className="text-neutral-600">Pilot Clinic: Philippines</p>
                                    <p className="text-neutral-600">Upcoming: Cebu Expansion</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Email Us</h4>
                                    <p className="text-neutral-600">info@karmayaclinics.org</p>
                                    <p className="text-neutral-600">partnerships@karmayaclinics.org</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">Phone</h4>
                                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>Volunteering</option>
                                    <option>Donation</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
