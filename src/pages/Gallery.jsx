import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Sample data for 3 albums
const albums = [
  {
    id: 1,
    title: "",
    photos: [
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
    ]
  },
  {
    id: 2,
    title: "",
    photos: [
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
    ]
  },
  {
    id: 3,
    title: "",
    photos: [
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
      "/images/cover.jpg",
    ]
  }
];

export default function Gallery() {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Auto play carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentAlbumIndex((prev) => (prev + 1) % albums.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextAlbum = () => {
    setCurrentAlbumIndex((prev) => (prev + 1) % albums.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevAlbum = () => {
    setCurrentAlbumIndex((prev) => (prev - 1 + albums.length) % albums.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="gallery" className="min-h-screen relative overflow-hidden bg-sky-50/30">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/10 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

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
            Kenangan Indah Kami
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            Gallery Prewedding
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-[1px] w-12 bg-sky-200" />
            <div className="w-5 h-5 text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="h-[1px] w-12 bg-sky-200" />
          </motion.div>
        </motion.div>

        {/* Album Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevAlbum}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextAlbum}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Album Content */}
          <div className="overflow-hidden">
            <motion.div
              key={currentAlbumIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-serif text-sky-600 mb-6">
                {albums[currentAlbumIndex].title}
              </h3>

              {/* 4 Grid Photo Layout */}
              <div className="grid grid-cols-2 gap-0">
                {albums[currentAlbumIndex].photos.slice(0, 4).map((photo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setSelectedPhoto(photo)}
                    className="aspect-square overflow-hidden shadow-md relative group cursor-pointer"
                  >
                    <img
                      src={photo}
                      alt={`Prewedding photo ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.img
                src={selectedPhoto}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="max-w-3xl w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
                // onClick={(e) => e.stopPropagation()} // biar klik di gambar gak close
              />
            </motion.div>
          )}

          {/* Album Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {albums.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentAlbumIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all ${currentAlbumIndex === index ? 'bg-sky-500 w-6' : 'bg-sky-200'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}