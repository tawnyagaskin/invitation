import { Calendar, CalendarHeart, Clock, Heart, MoonStar, Quote, SeparatorHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';
import FloatingHeart from '@/components/FloatingHeart';

export default function Hero() {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
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
      <div className="grid grid-cols-4 gap-3 mt-12 max-w-lg mx-auto px-12 pt-10">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col items-center p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100/50 shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="text-2xl font-bold text-sky-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-600 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };



  const SR = () => {
    return (
      <div className="flex items-center justify-center gap-4 text-4xl sm:text-5xl md:text-6xl font-[NewYork] text-sky-500 font-thin tracking-wide ">
        <span className='pb-10'>S</span>
        <div className="w-[0.5px] h-12 bg-sky-400 rounded-full" />
        <span className='pt-10'>R</span>
      </div>
    );
  }

  return (
    <>
      <section
        id="home" className="min-h-screen h-screen flex flex-col items-center justify-center py-20 text-center relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-[#D8B4FE]/10"
        style={{
          backgroundImage: `url(/images/galeri1-3.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-sky-50/40 to-pink-900/320 backdrop-blur-[1px] " />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          {/* Date Display */}
          <div className="space-y-6">
            <motion.svg
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewBox="0 0 500 120"
              className="w-full h-28"
            >
              <defs>
                <path
                  id="curve"
                  d="M 100,100 A 150,60 0 0,1 400,100"
                  fill="transparent"
                />
              </defs>
              <text
                fontSize="28"
                fontFamily="serif"
                fill="#fff"
                className="italic font-light"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  The Wedding of
                </textPath>
              </text>
            </motion.svg>
            {/* <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
          >
            <img
              src="/images/cover3.png"
              alt="Foto Pengantin"
              className="object-cover mx-auto w-72"
            />
          </motion.div> */}
            <div className="relative flex flex-col items-center space-y-4">
              <motion.h2
                initial={{ scale: 0.8, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 2, type: "spring" }}
                className="text-5xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-pink-100 "
              >
                {config.couple.groomName} & {config.couple.brideName}
              </motion.h2>
              {/* <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 2, type: "spring" }}
              className="text-3xl italic font-serif text-pink-400"
            >
              &
            </motion.div> */}

              {/* <motion.h2
              initial={{ scale: 0.8, opacity: 0, x: -20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              className="text-5xl italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600 pl-10"
            >
              {config.couple.brideName}
            </motion.h2> */}
            </div>
          </div>

          {/* Time and Date Info - Full Width Sky Background with White Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="relative w-full text-gray-500 "
          >
            <div className="space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex font-semibold italic text-base items-center flex-col justify-center space-x-3 "
              >
                {/* <CalendarHeart className="w-5 h-5 text-gray-500" /> */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r to-sky-100 from-white  text-lg">
                  {formatDate(config.event.dateTime)}
                </span>
              </motion.div>
              {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center justify-center space-x-3"
            >
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-light italic text-base ">
                {config.event.time}
              </span>
            </motion.div> */}
            </div>
          </motion.div>
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-sky-200 to-pink-200" />
            <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-r from-pink-200 to-sky-200" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-light italic text-base text-sky-600 max-w-lg mx-auto pt-36"
          >
            Count the Date
          </motion.p>

          {/* Countdown Timer */}
          <CountdownTimer targetDate={config.event.dateTime} />
        </motion.div>
      </section>

      <section>
        <div className='py-48 relative'>
          <FloatingHeart />
          <SR />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="space-y-8 relative z-10 py-56 text-center bg-gradient-to-b from-white via-sky-100/20 to-[#D8B4FE]/10"
        >

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-sky-200 to-pink-200" />
            <MoonStar className="w-6 h-6 text-pink-400" fill="currentColor" />
            <div className="h-px w-16 bg-gradient-to-r from-pink-200 to-sky-200" />
          </motion.div>

          <div className="space-y-6 px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-gray-500 text-center font-light italic text-base max-w-lg mx-auto"
            >
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-gray-500 text-center font-light italic text-xl"
            >
              QS. Ar-Rum: 21
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
              className="flex items-center justify-center gap-6 mt-8"
            >
              <div className="h-px w-16 bg-gradient-to-r from-sky-200 to-pink-200" />
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
              <div className="h-px w-16 bg-gradient-to-r from-pink-200 to-sky-200" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-light italic text-center text-base max-w-lg mx-auto"
            >
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami :
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="text-4xl italic text-left font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600 pt-12"
            >
              {config.couple.groomName_full}
            </motion.h2>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-base italic font-serif text-left bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-pink-700 leading-none"
            >
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">Putri dari </span>
              {config.couple.groomName_parents}
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="text-5xl text-center italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600 pt-10"
            >
              &
            </motion.h2>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-4xl italic text-right font-serif bg-clip-text text-transparent leading-none bg-gradient-to-r from-sky-600 to-pink-600 pt-10"
            >
              {config.couple.brideName_full}
            </motion.h2>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-base text-right italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-600"
            >
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">Putra dari </span>
              {config.couple.brideName_parents}
            </motion.p>
          </div>
        </motion.div>
      </section >
    </>
  )
}