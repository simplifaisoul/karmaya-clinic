import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: '/images/gallery/Karmaya Clinic Big and nice photo everyone outside with Mac.jpeg', alt: 'Karmaya Clinic Team Outside', span: 'sm:col-span-2 sm:row-span-2' },
        { src: '/images/gallery/Checking Vitals.jpeg', alt: 'Checking Vitals', span: '' },
        { src: '/images/gallery/Child mouth check.jpeg', alt: 'Child Health Check', span: '' },
        { src: '/images/gallery/Doctor Eyesight test Older man.jpeg', alt: 'Vision Test', span: 'sm:col-span-2' },
        { src: '/images/gallery/Inside the Clinic.jpeg', alt: 'Inside the Clinic', span: '' },
        { src: '/images/gallery/Temparature check.jpeg', alt: 'Temperature Check', span: '' },
        { src: '/images/gallery/Group outside assesment.jpeg', alt: 'Group Assessment Outside', span: 'sm:col-span-2 sm:row-span-2' },
        { src: '/images/gallery/Lung check Older lady.jpeg', alt: 'Lung Check', span: '' },
        { src: '/images/gallery/Kid getting treatment senstive photo.jpeg', alt: 'Child Treatment', span: '' },
        { src: '/images/gallery/Group sitting eyesight.jpeg', alt: 'Group Vision Assessment', span: 'sm:col-span-2' },
        { src: '/images/gallery/Group girls assesment indoor.jpeg', alt: 'Indoor Group Assessment', span: '' },
        { src: '/images/gallery/Karmaya Group Photo with Mac.jpeg', alt: 'Karmaya Team Group Photo', span: 'sm:col-span-3 sm:row-span-2' },
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-neutral-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
                        Our Impact
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                        Stories from the Field
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
                        Witness the transformation we're bringing to communities across the Philippines
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[180px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 ${image.span}`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-semibold text-xs mb-0.5">{image.alt}</p>
                                    <div className="flex items-center gap-1 text-white/70">
                                        <ZoomIn className="w-3 h-3" />
                                        <span className="text-[10px]">Click to view</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <button
                            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery Image"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
