import { FileText, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
    { title: "Children's Flu Guide", file: "Karmaya_Children flu.pdf", category: "Pediatrics" },
    { title: "Prostate & Testosterone Health", file: "Karmaya_Prostate and Testo.pdf", category: "Men's Health" },
    { title: "Water Removal from Ears", file: "Karmaya_R water removal from ears tips.pdf", category: "General Care" },
    { title: "Seeds & Nutrition", file: "Karmaya_seeds.pdf", category: "Nutrition" },
    { title: "Toxic Goiter Info", file: "Karmaya_Toxic goiter (1).pdf", category: "Endocrinology" },
    { title: "Type 2 Diabetes Diet", file: "Karmaya_Type 2 diabetes food.pdf", category: "Chronic Disease" },
    { title: "Uric Acid Reduction", file: "Karmaya_Uric acid reduction.pdf", category: "Nutrition" },
    { title: "UTI Home Remedies", file: "karmaya_Urinary Tract Infections home remedies.pdf", category: "Home Remedies" },
    { title: "Menstrual Health (Amenorrhea)", file: "Not having menstruation for 5 months.pdf", category: "Women's Health" },
    { title: "Pre-Diabetes Food Guide", file: "Pre diabetes food.pdf", category: "Nutrition" },
];

const Resources = () => {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Resources Hero */}
            <div className="relative bg-neutral-900 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-6">
                        <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-1.5" />
                            Back to Home
                        </Link>
                    </div>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Patient Knowledge Hub
                        </h1>
                        <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                            Empowering you with the knowledge to make informed decisions about your health.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300 p-5 md:p-6 group border border-neutral-100"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2.5 bg-blue-50 rounded-xl group-hover:bg-neutral-900 transition-colors duration-300">
                                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="bg-neutral-100 text-neutral-600 text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
                                    {resource.category}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-neutral-900 mb-3 leading-tight">
                                {resource.title}
                            </h3>
                            <a
                                href={`resources/${resource.file}`}
                                download
                                className="w-full inline-flex items-center justify-center bg-neutral-50 hover:bg-neutral-900 text-neutral-700 hover:text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download Guide
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
