import config from '@/config/config';
import { supabase } from '@/lib/supabase';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Calendar,
    CheckCircle,
    ChevronDown,
    Send,
    User
} from 'lucide-react';
import { useState } from 'react';

export default function RSVP() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [pax, setPax] = useState('1'); // Default ke 1 pax
    const [isOpen, setIsOpen] = useState(false);
    const [isPaxOpen, setIsPaxOpen] = useState(false);
    const [name, setName] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const attendanceOptions = [
        { value: 'attending', label: 'Ya, Saya akan datang', bool: true },
        { value: 'not-attending', label: 'Tidak, Saya tidak bisa datang', bool: false },
    ];

    const paxOptions = [
        { value: '1', label: '1 Orang' },
        { value: '2', label: '2 Orang' },
        { value: '3', label: '3 Orang' },
    ];

    const handleSubmitRSVP = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { data, error } = await supabase
            .from('rsvp')
            .insert([
                {
                    name: name,
                    is_attend: attendance === 'attending',
                    pax: attendance === 'attending' ? parseInt(pax) : 0,
                },
            ])
            .select();

        if (error) {
            console.error('Insert error:', error);
            setIsSubmitting(false);
            return;
        }

        setName('');
        setAttendance('');
        setPax('1');
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 7000);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <section id="rsvp" className="min-h-screen relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 py-20 relative z-10">
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
                        Konfirmasi Kehadiran Kamu
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        RSVP
                    </motion.h2>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-sky-200" />
                        <Calendar className="w-5 h-5 text-sky-400" />
                        <div className="h-[1px] w-12 bg-sky-200" />
                    </motion.div>
                </motion.div>

                {/* RSVP Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <form onSubmit={handleSubmitRSVP} className="relative">
                        <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-sky-100/50 shadow-lg">
                            <div className="space-y-4">
                                {/* Name Input */}
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

                                {/* Attendance Dropdown */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-2 relative"
                                >
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Apakah kamu hadir?</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                                    >
                                        <span className={attendance ? 'text-gray-700' : 'text-gray-400'}>
                                            {attendance
                                                ? attendanceOptions.find((opt) => opt.value === attendance)?.label
                                                : 'Pilih kehadiran...'}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-sky-100 overflow-hidden"
                                            >
                                                {attendanceOptions.map((option) => (
                                                    <motion.button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setAttendance(option.value);
                                                            setIsOpen(false);
                                                            if (option.value !== 'attending') setPax('1'); // Reset pax jika tidak hadir
                                                        }}
                                                        whileHover={{ backgroundColor: 'rgb(255, 241, 242)' }}
                                                        className={`w-full px-4 py-2.5 text-left transition-colors ${attendance === option.value ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-sky-50'
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Pax Dropdown (hanya muncul jika attending) */}
                                {attendance === 'attending' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-2 relative"
                                    >
                                        <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                            <User className="w-4 h-4" />
                                            <span>Jumlah yang hadir</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsPaxOpen(!isPaxOpen)}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-sky-100 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                                        >
                                            <span className={pax ? 'text-gray-700' : 'text-gray-400'}>
                                                {pax ? paxOptions.find((opt) => opt.value === pax)?.label : 'Pilih jumlah...'}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isPaxOpen ? 'transform rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isPaxOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-sky-100 overflow-hidden"
                                                >
                                                    {paxOptions.map((option) => (
                                                        <motion.button
                                                            key={option.value}
                                                            type="button"
                                                            onClick={() => {
                                                                setPax(option.value);
                                                                setIsPaxOpen(false);
                                                            }}
                                                            whileHover={{ backgroundColor: 'rgb(255, 241, 242)' }}
                                                            className={`w-full px-4 py-2.5 text-left transition-colors ${pax === option.value ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-sky-50'
                                                                }`}
                                                        >
                                                            {option.label}
                                                        </motion.button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <div className="flex items-center justify-end mt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 ${isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
                                            }`}
                                    >
                                        <Send className="w-4 h-4" />
                                        <span className="text-base">{isSubmitting ? 'Mengirim...' : 'Konfirmasi RSVP'}</span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </form>
                </motion.div>

                {/* Success Modal */}
                <AnimatePresence>
                    {showSuccessModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-sky-100/50 shadow-lg max-w-sm w-full mx-4"
                            >
                                <div className="flex flex-col items-center space-y-4">
                                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                                    <h3 className="text-lg font-semibold text-gray-800">RSVP Berhasil!</h3>
                                    <p className="text-gray-600 text-center">
                                        Terima kasih atas konfirmasi kehadiran Anda.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleCloseModal}
                                        className="px-6 py-2.5 rounded-xl bg-sky-500 text-white font-medium transition-all duration-200 hover:bg-sky-600"
                                    >
                                        OK
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
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
                        Atas kehadiran saudara/(i) & Do'a restunya, <br /> Kami mengucapkan Terima kasih
                    </motion.p>
                    <motion.h2
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl italic text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                    >
                        {config.couple.groomName} & {config.couple.brideName}
                    </motion.h2>
                </motion.div>
            </div>
        </section>
    );
}