import { useState, useCallback, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);
    const goNext = useCallback(() => {
        setSelectedIndex(prev => prev !== null ? (prev + 1) % images.length : null);
    }, [images.length]);
    const goPrev = useCallback(() => {
        setSelectedIndex(prev => prev !== null ? (prev - 1 + images.length) % images.length : null);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [selectedIndex, closeLightbox, goNext, goPrev]);

    return (
        <section id="gallery" className="py-16 md:py-24 bg-neutral-50 relative" aria-label="Photo Gallery">
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
                        <button
                            key={index}
                            type="button"
                            aria-label={`View ${image.alt}`}
                            className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${image.span} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <p className="text-white font-semibold text-xs mb-0.5">{image.alt}</p>
                                    <div className="flex items-center gap-1 text-white/70">
                                        <ZoomIn className="w-3 h-3" />
                                        <span className="text-[10px]">Tap to view</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile-Safe Lightbox — NO backdrop-blur, NO Framer Motion */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Viewing: ${images[selectedIndex].alt}`}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Previous button */}
                    <button
                        className="absolute left-2 md:left-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Next button */}
                    <button
                        className="absolute right-2 md:right-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Image */}
                    <img
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].alt}
                        className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Caption */}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-white/80 text-sm font-medium">
                            {images[selectedIndex].alt}
                            <span className="text-white/40 ml-2">{selectedIndex + 1} / {images.length}</span>
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
