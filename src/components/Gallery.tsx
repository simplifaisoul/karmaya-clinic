import { useState, useCallback, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'clinical' | 'community' | 'vision' | 'team';

interface GalleryImage {
    src: string;
    alt: string;
    category: Category[];
    span?: string;
}

const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'clinical', label: 'Clinical Care' },
    { key: 'community', label: 'Community Outreach' },
    { key: 'vision', label: 'Eye & Vision Care' },
    { key: 'team', label: 'Our People' },
];

const allImages: GalleryImage[] = [
    // ── Existing gallery photos ──
    { src: '/images/gallery/Karmaya Clinic Big and nice photo everyone outside with Mac.jpeg', alt: 'Karmaya Clinic Team Outside', category: ['team'], span: 'sm:col-span-2 sm:row-span-2' },
    { src: '/images/gallery/Checking Vitals.jpeg', alt: 'Checking Vitals', category: ['clinical'] },
    { src: '/images/gallery/Child mouth check.jpeg', alt: 'Child Health Check', category: ['clinical'] },
    { src: '/images/gallery/Doctor Eyesight test Older man.jpeg', alt: 'Vision Test', category: ['vision'], span: 'sm:col-span-2' },
    { src: '/images/gallery/Inside the Clinic.jpeg', alt: 'Inside the Clinic', category: ['clinical'] },
    { src: '/images/gallery/Temparature check.jpeg', alt: 'Temperature Check', category: ['clinical'] },
    { src: '/images/gallery/Group outside assesment.jpeg', alt: 'Group Assessment Outside', category: ['community'], span: 'sm:col-span-2 sm:row-span-2' },
    { src: '/images/gallery/Lung check Older lady.jpeg', alt: 'Lung Check', category: ['clinical'] },
    { src: '/images/gallery/Kid getting treatment senstive photo.jpeg', alt: 'Child Treatment', category: ['clinical'] },
    { src: '/images/gallery/Group sitting eyesight.jpeg', alt: 'Group Vision Assessment', category: ['vision', 'community'], span: 'sm:col-span-2' },
    { src: '/images/gallery/Group girls assesment indoor.jpeg', alt: 'Indoor Group Assessment', category: ['community'] },
    { src: '/images/gallery/Karmaya Group Photo with Mac.jpeg', alt: 'Karmaya Team Group Photo', category: ['team'], span: 'sm:col-span-2 sm:row-span-2' },

    // ── New photos: Clinical Care ──
    { src: '/images/gallery/patient-care-bed.jpg', alt: 'Patient receiving bedside care', category: ['clinical'] },
    { src: '/images/gallery/nurse-examining-patient.jpg', alt: 'Nurse examining a young patient', category: ['clinical'] },
    { src: '/images/gallery/bp-monitoring-digital.jpg', alt: 'Digital blood pressure monitoring', category: ['clinical'], span: 'sm:col-span-2' },
    { src: '/images/gallery/arm-examination.jpg', alt: 'Medical arm examination', category: ['clinical'] },
    { src: '/images/gallery/doctor-examining-lady.jpg', alt: 'Doctor examining patient', category: ['clinical'] },
    { src: '/images/gallery/elder-patient-examination.jpg', alt: 'Elder patient examination', category: ['clinical'] },
    { src: '/images/gallery/doctor-patient-checkup.jpg', alt: 'Routine health checkup', category: ['clinical'] },
    { src: '/images/gallery/doctor-throat-exam.jpg', alt: 'Throat examination', category: ['clinical'] },
    { src: '/images/gallery/doctor-neck-palpation.jpg', alt: 'Neck and gland palpation', category: ['clinical'] },
    { src: '/images/gallery/doctor-abdominal-check.jpg', alt: 'Abdominal assessment', category: ['clinical'] },
    { src: '/images/gallery/consultation-with-paperwork.jpg', alt: 'Consultation with medical records', category: ['clinical'], span: 'sm:col-span-2' },
    { src: '/images/gallery/doctor-examination-closeup.jpg', alt: 'Close-up clinical examination', category: ['clinical'] },
    { src: '/images/gallery/vitals-check-seated.jpg', alt: 'Seated vitals assessment', category: ['clinical'] },
    { src: '/images/gallery/patient-on-bed-treatment.jpg', alt: 'Patient receiving treatment', category: ['clinical'] },
    { src: '/images/gallery/patient-bed-with-family.jpg', alt: 'Family support during treatment', category: ['clinical'] },
    { src: '/images/gallery/teleconsultation-phone.jpg', alt: 'Teleconsultation via phone', category: ['clinical'] },
    { src: '/images/gallery/mobile-clinic-consultation.jpg', alt: 'Mobile clinic consultation', category: ['clinical', 'community'] },

    // ── New photos: Community Outreach ──
    { src: '/images/gallery/blood-pressure-check-elderly.jpg', alt: 'Blood pressure screening for elderly', category: ['community', 'clinical'] },
    { src: '/images/gallery/community-bp-screening.jpg', alt: 'Community blood pressure screening', category: ['community', 'clinical'] },
    { src: '/images/gallery/clinic-overview-busy.jpg', alt: 'Busy clinic day with waiting patients', category: ['community'] },
    { src: '/images/gallery/outdoor-community-health-day.jpg', alt: 'Outdoor community health event', category: ['community'], span: 'sm:col-span-2 sm:row-span-2' },
    { src: '/images/gallery/outdoor-health-screening.jpg', alt: 'Outdoor health screening station', category: ['community'] },
    { src: '/images/gallery/kids-playing-outside-clinic.jpg', alt: 'Children outside the clinic', category: ['community'] },
    { src: '/images/gallery/mothers-with-baby-waiting.jpg', alt: 'Mothers with infant at clinic', category: ['community'] },
    { src: '/images/gallery/mother-holding-baby.jpg', alt: 'Mother and baby waiting for care', category: ['community'] },
    { src: '/images/gallery/patient-bp-assessment.jpg', alt: 'Community BP assessment outreach', category: ['community', 'clinical'] },

    // ── New photos: Vision Care ──
    { src: '/images/gallery/eye-test-station.jpg', alt: 'Eye test and glasses station', category: ['vision'] },
    { src: '/images/gallery/community-glasses-distribution.jpg', alt: 'Community eyeglasses distribution', category: ['vision', 'community'], span: 'sm:col-span-2' },

    // ── New photos: Team & People ──
    { src: '/images/gallery/family-at-clinic.jpg', alt: 'Community family visiting clinic', category: ['team', 'community'] },
    { src: '/images/gallery/family-consultation.jpg', alt: 'Family consultation with staff', category: ['team'] },
    { src: '/images/gallery/team-and-patient-clinic.jpg', alt: 'Team with patients at clinic', category: ['team'], span: 'sm:col-span-2' },
    { src: '/images/gallery/young-patient-smiling.jpg', alt: 'Young patient smiling', category: ['team'] },
    { src: '/images/gallery/elderly-man-checkup.jpg', alt: 'Elderly community member at checkup', category: ['team', 'community'] },
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filteredImages = activeCategory === 'all'
        ? allImages
        : allImages.filter(img => img.category.includes(activeCategory));

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);
    const goNext = useCallback(() => {
        setSelectedIndex(prev => prev !== null ? (prev + 1) % filteredImages.length : null);
    }, [filteredImages.length]);
    const goPrev = useCallback(() => {
        setSelectedIndex(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
    }, [filteredImages.length]);

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
                    <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
                        Witness the transformation we're bringing to communities across the Philippines
                    </p>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                onClick={() => { setActiveCategory(cat.key); setSelectedIndex(null); }}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                    activeCategory === cat.key
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                        : 'bg-white text-neutral-600 border border-neutral-200 hover:border-blue-300 hover:text-blue-600'
                                }`}
                            >
                                {cat.label}
                                <span className={`ml-1.5 text-xs ${activeCategory === cat.key ? 'text-blue-200' : 'text-neutral-400'}`}>
                                    {cat.key === 'all' ? allImages.length : allImages.filter(img => img.category.includes(cat.key)).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[180px]">
                    {filteredImages.map((image, index) => (
                        <button
                            key={image.src}
                            type="button"
                            aria-label={`View ${image.alt}`}
                            className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${image.span || ''} focus:outline-none focus:ring-2 focus:ring-blue-500`}
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

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Viewing: ${filteredImages[selectedIndex].alt}`}
                >
                    <button
                        className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    <button
                        className="absolute left-2 md:left-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    <button
                        className="absolute right-2 md:right-4 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    <img
                        src={filteredImages[selectedIndex].src}
                        alt={filteredImages[selectedIndex].alt}
                        className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-white/80 text-sm font-medium">
                            {filteredImages[selectedIndex].alt}
                            <span className="text-white/40 ml-2">{selectedIndex + 1} / {filteredImages.length}</span>
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
