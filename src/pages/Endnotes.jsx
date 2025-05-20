import config from '@/config/config';
import { AnimatePresence, motion } from 'framer-motion';

export default function Endnotes() {
  return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12 pb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-3 pt-4"
                    >
                        <div className="w-8 h-px bg-sky-200/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                        <div className="w-8 h-px bg-sky-200/50" />
                    </motion.div>
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