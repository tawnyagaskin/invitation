// EventCard.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  CalendarPlus,
  X,
  Chrome,
  Apple,
  Calendar as CalendarIcon
} from 'lucide-react';
import { formatDate } from '@/lib/formatEventDate';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm"
          >
            <div className="bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl border border-gray-100">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CalendarButton = ({ icon: Icon, label, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="w-5 h-5" />
    <span className="text-gray-700 font-medium">{label}</span>
  </motion.button>
);

const SingleEventCard = ({ eventData }) => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const googleCalendarLink = () => {
    if (!eventData.date || !eventData.startTime || !eventData.endTime) {
      console.error("Date or time missing!", eventData);
      return "#"; // fallback link atau jangan buka apa-apa
    }

    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00+07:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00+07:00`);

    const formatDate = (date) => {
      if (isNaN(date)) {
        console.error("Invalid date detected:", date);
        return "";
      }

      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}&ctz=${eventData.timeZone}`;
  };

  const generateICSContent = () => {
    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00`);

    const formatICSDate = (date) => {
      if (isNaN(date)) {
        console.error("Invalid date detected:", date);
        return "";
      }

      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${eventData.title}
DESCRIPTION:${eventData.description}
LOCATION:${eventData.location}
END:VEVENT
END:VCALENDAR`;
  };

  const downloadICSFile = () => {
    const icsContent = generateICSContent();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${eventData.title.toLowerCase().replace(/ /g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <motion.div
        className=" p-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-evenly items-center">
          <div className="relative inline-block w-full text-center">
            <span className="absolute top-[8px] left-1/3 text-3xl font-[NewYork] text-gray-700 opacity-10 select-none pointer-events-none">
              {eventData.title.split(' - ')[0]}
            </span>
            <span className="relative text-3xl text-sky-700 font-[NewYork] ">
              {eventData.title.split(' - ')[0]}
            </span>
          </div>

        </div>
        {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sky-500 hover:text-sky-600 transition-colors pl-6"
              onClick={() => setShowCalendarModal(true)}
            >
              <div className='w-2 h-2' />
              <CalendarPlus className="w-5 h-5" />
            </motion.button> */}

        <div className="space-y-3 text-gray-600 text-center italic">
          <div className="flex items-center justify-center space-x-3">
            <span>{formatDate(eventData.date)}</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span>Pukul: {eventData.startTime} - {eventData.endTime} WIB</span>
          </div>
          <div className="flex items-center justify-center space-x-3 pt-6">
            <MapPin className="w-5 h-5 text-sky-500" />
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span className='text-sm'>Lokasi acara:</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <span>{eventData.location}</span>
          </div>
        </div>

      </motion.div>

      <Modal
        isOpen={showCalendarModal}
        onClose={() => setShowCalendarModal(false)}
      >
        <div className="space-y-6 ">
          <div className="flex justify-between  items-center">
            <h3 className="text-xl font-semibold text-gray-800">Add to Calendar</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCalendarModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="space-y-3">
            <CalendarButton
              icon={(props) => <Chrome {...props} className="w-5 h-5 text-sky-500" />}
              label="Google Calendar"
              onClick={() => window.open(googleCalendarLink(), '_blank')}
            />

            <CalendarButton
              icon={(props) => <Apple {...props} className="w-5 h-5 text-gray-900" />}
              label="Apple Calendar"
              onClick={downloadICSFile}
            />

            <CalendarButton
              icon={(props) => <CalendarIcon {...props} className="w-5 h-5 text-blue-600" />}
              label="Outlook Calendar"
              onClick={downloadICSFile}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

// Main EventCards component that handles multiple events
const EventCards = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <SingleEventCard key={index} eventData={event} />
      ))}
    </div>
  );
};

export default EventCards;