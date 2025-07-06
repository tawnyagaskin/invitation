import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
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
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { formatDate } from '@/lib/formatEventDate';
import { supabase } from '@/lib/supabase';
import config from '@/config/config';

export default function Wishes() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [newWish, setNewWish] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('attending');
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [wishes, setWishes] = useState([]);

    const options = [
        { value: 'attending', label: 'Ya, Saya akan datang' },
        { value: 'not-attending', label: 'Tidak, Saya tidak bisa datang' },
        { value: 'maybe', label: 'Mungkin, Saya akan konfirmasi nanti' },
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

    return (
        <>
            <section id="wishes" className="min-h-screen relative overflow-hidden bg-gradient-to-b to-[#D8B4FE]/10 via-sky-50/20 from-white">
                {showConfetti && <Confetti recycle={false} numberOfPieces={500} gravity={0.04} />}

                <div className="container mx-auto px-4 py-10 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-12"
                    >
                        <motion.svg
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            viewBox="0 0 500 100"
                            className="w-full h-28 pt-10"
                        >
                            <defs>
                                <path
                                    id="curve"
                                    d="M 100,100 A 150,60 0 0,1 400,200"
                                    fill="transparent"
                                />
                            </defs>
                            <text
                                fontSize="28"
                                fontFamily="serif"
                                fill="#0EA5E9"
                                className="italic font-light"
                            >
                                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                    Pesan dan Doa
                                </textPath>
                            </text>
                        </motion.svg>

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

                    {/* Wishes List - Scrollable Vertically with Custom Scrollbar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto max-h-[400px] overflow-x-hidden overflow-y-auto space-y-4 pr-2 custom-scrollbar"
                    >
                        <style>
                            {`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 12px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: linear-gradient(to bottom, #E0F7FA, #F0F4FF);
                                    border-radius: 12px;
                                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: linear-gradient(to bottom, #0EA5E9, #38BDF8);
                                    border-radius: 12px;
                                    border: 2px solid #F0F4FF;
                                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                                    transition: background 0.3s ease;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: linear-gradient(to bottom, #0284C7, #0EA5E9);
                                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                                }
                                .custom-scrollbar {
                                    scrollbar-width: thin;
                                    scrollbar-color: #0EA5E9 #F0F4FF;
                                }
                            `}
                        </style>
                        <AnimatePresence>
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 to-sky-50/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-sky-100/50 shadow-md">
                                        <div className="flex items-start space-x-3 mb-2">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-sky-400 to-sky-500 flex items-center justify-center text-white text-sm font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium text-gray-800 text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate">
                                                        {formatDate(wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {wish.message}
                                        </p>
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
                        </AnimatePresence>
                    </motion.div>

                    {/* Wishes Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl mx-auto mt-12"
                    >
                        <form onSubmit={handleSubmitWish} className="relative">
                            <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-sky-100/50 shadow-lg">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                            <User className="w-4 h-4" />
                                            <span>Nama Kamu</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Masukkan nama kamu..."
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    {/* <div className="space-y-2">
                                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>Konfirmasi Kehadiran</span>
                                        </div>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-sky-100 text-gray-700 flex justify-between items-center"
                                                onClick={() => setIsOpen(!isOpen)}
                                            >
                                                {attendance ? options.find(opt => opt.value === attendance)?.label : 'Pilih kehadiran...'}
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                            {isOpen && (
                                                <div className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-sky-100">
                                                    {options.map((option) => (
                                                        <button
                                                            key={option.value}
                                                            type="button"
                                                            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-sky-50 transition-colors"
                                                            onClick={() => {
                                                                setAttendance(option.value);
                                                                setIsOpen(false);
                                                            }}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div> */}

                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>Harapan Kamu</span>
                                        </div>
                                        <textarea
                                            placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                                            className="w-full h-24 p-4 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 resize-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                                            required
                                            value={newWish}
                                            onChange={(e) => setNewWish(e.target.value)}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting || !name || !attendance || !newWish}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full mt-4 px-4 py-2.5 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-colors ${isSubmitting || !name || !attendance || !newWish ? 'bg-gray-300 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
                                            }`}
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{isSubmitting ? 'Mengirim...' : 'Kirimkan Doa'}</span>
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}