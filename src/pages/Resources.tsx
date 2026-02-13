import { FileText, Download, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <div className="min-h-screen bg-neutral-50 font-sans">
            {/* Resources Hero */}
            <div className="relative bg-primary pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 backdrop-blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-8">
                        <a href="/" className="inline-flex items-center text-white/90 hover:text-white font-medium transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </a>
                    </div>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-md tracking-tight">
                            Patient Knowledge Hub
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-light">
                            Empowering you with the knowledge to make informed decisions about your health.
                        </p>
                    </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-action/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group border border-neutral-100 hover:-translate-y-2"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="bg-neutral-100 text-neutral-600 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                                    {resource.category}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                {resource.title}
                            </h3>
                            <div className="w-12 h-1 bg-action/20 group-hover:bg-action rounded-full mb-6 transition-all duration-300"></div>
                            <a
                                href={`resources/${resource.file}`}
                                download
                                className="w-full inline-flex items-center justify-center bg-neutral-50 hover:bg-action text-neutral-700 hover:text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 group-hover:shadow-md"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Guide
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
