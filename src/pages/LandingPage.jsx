// src/pages/LandingPage.jsx
import config from '@/config/config';
import { safeBase64 } from '@/lib/base64';
import { formatDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const LandingPage = ({ onOpenInvitation }) => {
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
  
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cover.jpg')" }}
    >
    {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        {/* Card Container */}
          <div className="backdrop-blur-sm bg-white/50 p-8 md:p-10 rounded-2xl border border-sky-100/50 shadow-xl">
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 bg-sky-200/50" />
              <div className="w-2 h-2 rounded-full bg-sky-300" />
              <div className="h-px w-16 bg-sky-200/50" />
          </div>

          {/* Date and Time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            // Changed to vertical layout with space between items
            className="flex flex-col gap-4 mb-8 items-center"
          >
              <div className="inline-flex flex-col items-center space-y-1  px-6 py-3 rounded-xl">
                <Calendar className="w-5 h-5 text-sky-400" />
              <p className="text-gray-700 font-medium">
                {formatDate(config.event.dateTime)}
              </p>
            </div>

              <div className="inline-flex flex-col items-center space-y-1  px-6 py-3 rounded-xl">
                <Clock className="w-5 h-5 text-sky-400" />
              <p className="text-gray-700 font-medium">
                {config.event.time}
              </p>
            </div>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl italic md:text-5xl font-serif text-gray-800 leading-tight">
                {config.couple.groomName}
                  <span className="text-sky-400 mx-3">&</span>
                {config.couple.brideName}
              </h1>
                <div className="h-px w-24 mx-auto bg-sky-200" />
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="space-y-2 text-center mt-5"
          >
              <p className="text-gray-500 font-serif italic">
                  Kepada Yth.
              </p>
              <p className="text-gray-600 font-medium text-xs">
                  Bapak/Ibu/Saudara/i
              </p>
              <p className="text-sky-500 font-semibold text-2xl italic">
                  {guestName ? guestName : "Tamu"}
              </p>
          </motion.div>

          {/* Open Invitation Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
                className="group relative w-full bg-sky-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-sky-600 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Buka Undangan</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
)};

export default LandingPage;