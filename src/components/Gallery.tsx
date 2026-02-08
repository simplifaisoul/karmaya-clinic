import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Placeholder mapping:
    // gallery1.jpg: Group photo outside
    // gallery2.jpg: Inside photo with patient
    // gallery3.jpg: Other inside/team photo
    // gallery4.jpg ...
    const images = [
        { src: '/images/gallery1.jpg', alt: 'Karmaya Team - Outside' },
        { src: '/images/gallery2.jpg', alt: 'Patient Consultation' },
        { src: '/images/gallery3.jpg', alt: 'Clinic Examination' },
        { src: '/images/gallery4.jpg', alt: 'Community Outreach' },
        { src: '/images/gallery5.jpg', alt: 'Health Education' },
        { src: '/images/gallery6.jpg', alt: 'Volunteers' },
    ];

    return (
        <section id="gallery" className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Our Impact</h2>
                    <h3 className="text-4xl font-heading font-bold text-neutral-900 mb-6">Moments of Care</h3>
                    <p className="max-w-2xl mx-auto text-neutral-600">
                        Glimpses into the daily lives we touch and the communities we serve.
                        <span className="block text-sm mt-2 italic text-neutral-500">(To the user: Please replace these placeholder images with your actual photos in the code)</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`image-${index}`}
                            onClick={() => setSelectedImage(img.src)}
                            whileHover={{ scale: 1.03 }}
                            className="cursor-pointer overflow-hidden rounded-xl shadow-md bg-white h-64 relative group"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-secondary focus:outline-none"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-10 h-10" />
                            </button>
                            <motion.img
                                layoutId={`image-${images.findIndex(img => img.src === selectedImage)}`}
                                src={selectedImage}
                                alt="Enlarged view"
                                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
