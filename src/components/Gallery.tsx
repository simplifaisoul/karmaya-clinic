import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: '/images/clinic_team_outside.jpg', alt: 'Karmaya Team', span: 'sm:col-span-2 sm:row-span-2' },
        { src: '/images/patient_consultation.jpg', alt: 'Patient Consultation', span: '' },
        { src: '/images/clinic_team_outside.jpg', alt: 'Community Outreach', span: '' },
        { src: '/images/patient_consultation.jpg', alt: 'Health Education', span: 'sm:col-span-2' },
        { src: '/images/clinic_team_outside.jpg', alt: 'Volunteers at Work', span: '' },
        { src: '/images/patient_consultation.jpg', alt: 'Medical Services', span: '' },
    ];

    return (
        <section id="gallery" className="py-20 md:py-28 bg-neutral-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-5 shadow-sm">
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 tracking-tight">
                        Stories from the Field
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                        Witness the transformation we're bringing to communities across the Philippines
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-premium hover:shadow-premium-hover transition-all duration-300 ${image.span}`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-semibold text-sm mb-1">{image.alt}</p>
                                    <div className="flex items-center gap-1.5 text-white/70">
                                        <ZoomIn className="w-3.5 h-3.5" />
                                        <span className="text-xs">Click to view</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-neutral-900/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery Image"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
