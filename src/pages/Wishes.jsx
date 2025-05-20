import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
} from 'lucide-react'
import { useState, useEffect } from 'react';
import { formatDate } from '@/lib/formatEventDate';
import { supabase } from '@/lib/supabase';
import config from '@/config/config';

export default function Wishes() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [newWish, setNewWish] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [wishes, setWishes] = useState([]);

    const options = [
        { value: 'attending', label: 'Ya, Saya akan datang' },
        { value: 'not-attending', label: 'Tidak, Saya tidak bisa datang' },
        { value: 'maybe', label: 'Mungkin, Saya akan konfirmasi nanti' }
    ];

    const handleSubmitWish = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        const { data, error } = await supabase
        .from('wishes')
        .insert([
          {
            name: name,
            message: newWish,
            attendance: attendance,
             timestamp: new Date().toISOString(),
           },
         ])
         .select();

        if (error) {
            console.error('Insert error:', error);
            setIsSubmitting(false);
            return;
        }


      const newWishObj = {
         id: data[0].id,
         name: name,
         message: newWish,
         attendance: attendance,
         timestamp: new Date().toISOString(),
       };
     
       setWishes(prev => [newWishObj, ...prev]);
       setName('');
       setNewWish('');
       setAttendance('');
       setIsSubmitting(false);
       setShowConfetti(true);
       setTimeout(() => setShowConfetti(false), 5000);
    };
    const getAttendanceIcon = (status) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-emerald-500" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-sky-500" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-amber-500" />;
            default:
                return null;
        }
    };

    useEffect(() => {
        const fetchWishes = async () => {
          const { data, error } = await supabase
            .from('wishes')
            .select('*')
            .order('timestamp', { ascending: false });
      
          if (error) {
            console.error('Fetch error:', error);
          } else {
            setWishes(data);
          }
        };
      
        fetchWishes();
      }, []);


    return (<>
        <section id="wishes" className="min-h-screen relative overflow-hidden">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 py-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-sky-500 font-medium"
                    >
                        Kirimkan Doa dan Harapan Terbaik Kamu
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Pesan dan Doa
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-sky-200" />
                        <MessageCircle className="w-5 h-5 text-sky-400" />
                        <div className="h-[1px] w-12 bg-sky-200" />
                    </motion.div>
                </motion.div>

                {/* Wishes List */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <AnimatePresence>
                        <Marquee speed={20}
                            gradient={false}
                            className="[--duration:20s] py-2">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative w-[280px]"
                                >
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-sky-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                                    {/* Card content */}
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-sky-100/50 shadow-md">
                                        {/* Header */}
                                        <div className="flex items-start space-x-3 mb-2">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-sky-400 flex items-center justify-center text-white text-sm font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>

                                            {/* Name, Time, and Attendance */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium text-gray-800 text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                    {getAttendanceIcon(wish.attendance)}
                                                </div>
                                                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate">
                                                        {formatDate(wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                                            {wish.message}
                                        </p>

                                        {/* Optional: Time indicator for recent messages */}
                                        {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
                                            <div className="absolute top-2 right-2">
                                                <span className="px-2 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-medium">
                                                    New
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </Marquee>
                    </AnimatePresence>
                </div>
                {/* Wishes Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <form onSubmit={handleSubmitWish} className="relative">
                        <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-sky-100/50 shadow-lg">
                            <div className='space-y-2'>
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <User className="w-4 h-4" />
                                        <span>Nama Kamu</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Masukan nama kamu..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Wish Textarea */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Harapan kamu</span>
                                    </div>
                                    <textarea
                                        placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                                        required
                                        value={newWish}
                                        onChange={(e) => setNewWish(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <Smile className="w-5 h-5" />
                                    <span className="text-xs">Berikan Doa Kamu</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${isSubmitting
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-sky-500 hover:bg-sky-600'}`}
                                >
                                    <Send className="w-4 h-4" />
                                    <span className='text-base'>{isSubmitting ? 'Mengirim...' : 'Kirimkan Doa'}</span>
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    </>)
}