import { Heart } from "lucide-react";
import { motion } from 'framer-motion'
import React from 'react'

const FloatingHeart = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight
          }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1.2, 1.2, 0.7],
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
          className="absolute"
        >
          <Heart
            className={`w-${Math.random() * 4 + 4} h-${Math.random() * 4 + 4} ${i % 3 === 0 ? 'text-sky-400' :
              i % 3 === 1 ? 'text-pink-400' :
                'text-[#D8B4FE]'}`}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>)
}

export default FloatingHeart
