import config from '@/config/config';
import { AnimatePresence, motion } from 'framer-motion';

export default function Endnotes() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto pt-10 pb-20 bg-gradient-to-b from-[#D8B4FE]/10 via-sky-50/20 to-white"
        >
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 max-w-md mx-auto py-10 text-center"
            >
                Atas kehadiran saudara dan saudari serta doa restu, <br /> kami mengucapkan terima kasih.
            </motion.p>
            <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl italic text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
            >
                {config.couple.groomName} & {config.couple.brideName}
            </motion.h2>
        </motion.div >
    );
}