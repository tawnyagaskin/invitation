// src/components/bottom-bar/BottomBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  CalendarHeart,
  MapPin,
  Gift,
  MessageCircleHeart,
  BookHeart
} from 'lucide-react';
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: '', href: '#home' },
  { icon: CalendarHeart, label: '', href: '#event' },
  // { icon: MapPin, label: '', href: '#location' },
  { icon: Gift, label: '', href: '#gifts' },
  { icon: BookHeart, label: '', href: '#gallery' },
  { icon: MessageCircleHeart, label: '', href: '#wishes' },
];

const BottomBar = () => {
  const [active, setActive] = React.useState('home');

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex flex-col items-center gap-2">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-50/80",
                active === item.label.toLowerCase()
                  ? "text-primary bg-primary/5"
                  : "text-gray-600"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(item.label.toLowerCase())}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200",
                  active === item.label.toLowerCase()
                    ? "stroke-sky-500"
                    : "stroke-gray-600"
                )}
              />
              <span className={cn(
                "text-[10px] sm:text-xs font-medium transition-all duration-200 line-clamp-1",
                active === item.label.toLowerCase()
                  ? "scale-105 text-sky-500"
                  : "scale-100"
              )}>
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;