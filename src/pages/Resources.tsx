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
        <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <a href="/" className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </a>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-4">Patient Resources</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        Downloadable guides and information to support your journey to better health.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group border border-neutral-100"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <FileText className="w-8 h-8 text-primary" />
                                </div>
                                <span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-full font-medium">
                                    {resource.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                                {resource.title}
                            </h3>
                            <a
                                href={`/resources/${resource.file}`}
                                download
                                className="inline-flex items-center text-action font-semibold hover:text-orange-600 transition-colors mt-2"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
