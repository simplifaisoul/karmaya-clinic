import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppWidget = () => {
    // Replace with actual phone number
    const phoneNumber = "15551234567";
    const message = "Hello! I would like to know more about Karmaya MicroClinics.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ y: -5 }}
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3 font-bold">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppWidget;
