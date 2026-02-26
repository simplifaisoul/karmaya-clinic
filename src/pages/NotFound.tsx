import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-8xl font-extrabold text-blue-600 mb-4">404</div>
                    <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
                    <p className="text-neutral-500 mb-8 leading-relaxed">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            <Home className="w-4 h-4" /> Go Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neutral-100 text-neutral-700 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
