import { Calendar, CalendarHeart, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero() {
    const [guestName, setGuestName] = useState('');

    useEffect(() => {
        // Get guest parameter from URL
        const urlParams = new URLSearchParams(window.location.search);
        const guestParam = urlParams.get('guest');

        if (guestParam) {
            try {
                const decodedName = safeBase64.decode(guestParam);
                setGuestName(decodedName);
            } catch (error) {
                console.error('Error decoding guest name:', error);
                setGuestName('');
            }
        }
    }, []);
    const CountdownTimer = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        function calculateTimeLeft() {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    menit: Math.floor((difference / 1000 / 60) % 60),
                    detik: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        }
        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearInterval(timer);
        }, [targetDate]);
        return (
            <div className="grid grid-cols-4 gap-4 mt-8">
                {Object.keys(timeLeft).map((interval) => (
                    <motion.div
                        key={interval}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-sky-100"
                    >
                        <span className="text-2xl font-bold text-sky-600">
                            {timeLeft[interval]}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{interval}</span>
                    </motion.div>
                ))}
            </div>
        );
    };
    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.random() * 3 + 3} h-${Math.random() * 3 + 3} ${i % 3 === 0 ? 'text-sky-400' :
                                i % 3 === 1 ? 'text-pink-400' :
                                    'text-red-400'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };
    return (
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 relative z-10"
                >

                    {/* Date Display */}
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 font-light italic"
                        >
                            Undangan Pernikahan
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <img
                                src="/images/cover3.png"
                                alt="Foto Pengantin"
                                // width={160}
                                // height={160}
                                className="object-cover mx-auto"
                            />
                        </motion.div>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            {config.couple.groomName} & {config.couple.brideName}
                        </motion.h2>

                    </div>
                    {/* Decorative Line */}


                    {/* Time and Date Info */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative max-w-md mx-auto"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-white/50 backdrop-blur-md rounded-2xl" />

                        <div className="relative px-8 py-10 rounded-2xl border border-sky-100/50">


                            {/* Content */}
                            <div className="space-y-6 text-center">
                                {/* Date and Time */}
                                <div className="space-y-3">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Calendar className="w-4 h-4 text-sky-400" />
                                        <span className="text-gray-700 font-medium">
                                            {formatDate(config.event.dateTime)}
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Clock className="w-4 h-4 text-sky-400" />
                                        <span className="text-gray-700 font-medium">
                                            {config.event.time}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Divider */}


                                {/* Invitation Text */}

                            </div>

                            {/* Bottom Decorative Line */}

                        </div>

                        {/* Background Blur Circles */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-100/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-100/20 rounded-full blur-xl" />
                    </motion.div>

                    {/* Countdown Timer */}
                    <CountdownTimer targetDate={config.event.dateTime} />

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-4 mt-6"
                    >
                        <div className="h-[1px] w-12 bg-sky-200" />
                        <div className="text-sky-400">
                            <CalendarHeart className="w-4 h-4" fill="currentColor" />
                        </div>
                        <div className="h-[1px] w-12 bg-sky-200" />
                    </motion.div>


                    <div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 max-w-md mx-auto"
                        >
                            Kami mohon do'a & restunya atas pernikahan kami                        </motion.p>
                        <br />

                        <br />
                        <br />
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            {config.couple.groomName_full}
                        </motion.h2>
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            Putra dari {config.couple.groomName_parents}
                        </motion.span>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-5xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            &
                        </motion.h2>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            {config.couple.brideName_full}
                        </motion.h2>
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
                        >
                            Putri dari {config.couple.brideName_parents}
                        </motion.span></div>
                </motion.div>
            </section>
        </>
    )
}