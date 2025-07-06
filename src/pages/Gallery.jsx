import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

// Sample data for 3 albums with optimized image paths
const albums = [
  {
    id: 1,
    title: "",
    photos: [
      { src: "/images/galeri1-3.jpg", thumbnail: "/images/galeri1-3.jpg" },
      { src: "/images/galeri1-2.jpg", thumbnail: "/images/galeri1-2.jpg" },
      { src: "/images/galeri1-4.jpg", thumbnail: "/images/galeri1-4.jpg" },
      { src: "/images/galeri1.jpg", thumbnail: "/images/galeri1.jpg" },
    ],
  },
  {
    id: 2,
    title: "",
    photos: [
      { src: "/images/galeri2-1.jpg", thumbnail: "/images/galeri2-1.jpg" },
      { src: "/images/galeri2-2.jpg", thumbnail: "/images/galeri2-2.jpg" },
      { src: "/images/galeri2-3.jpg", thumbnail: "/images/galeri2-3.jpg" },
      { src: "/images/galeri2-4.jpg", thumbnail: "/images/galeri2-4.jpg" },
    ],
  },
  {
    id: 3,
    title: "",
    photos: [
      { src: "/images/galeri3-3.jpg", thumbnail: "/images/galeri3-3.jpg" },
      { src: "/images/galeri3-2.jpg", thumbnail: "/images/galeri3-2.jpg" },
      { src: "/images/galeri3-1.jpg", thumbnail: "/images/galeri3-1.jpg" },
      { src: "/images/galeri3-4.jpg", thumbnail: "/images/galeri3-4.jpg" },
    ],
  },
  {
    id: 4,
    title: "",
    photos: [
      { src: "/images/Lamaran1.jpeg", thumbnail: "/images/Lamaran1.jpeg" },
      { src: "/images/lamaran5.jpeg", thumbnail: "/images/lamaran5.jpeg" },
      { src: "/images/Lamaran3.jpeg", thumbnail: "/images/Lamaran3.jpeg" },
      { src: "/images/Lamaran4.jpg", thumbnail: "/images/Lamaran4.jpg" },
    ],
  },
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

  // Debounced navigation functions
  const nextAlbum = useCallback(() => {
    setCurrentAlbumIndex((prev) => (prev + 1) % albums.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const prevAlbum = useCallback(() => {
    setCurrentAlbumIndex((prev) => (prev - 1 + albums.length) % albums.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  return (
    <section id="gallery" className="min-h-screen relative overflow-hidden bg-sky-50/30">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/10 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-[1px] w-12 bg-sky-200" />
            <div className="w-5 h-5 text-sky-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-[1px] w-12 bg-sky-200" />
          </motion.div>
        </motion.div>

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
            fill="#0EA5E9"
            className="italic font-light"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              Gallery
            </textPath>
          </text>
        </motion.svg>




        {/* Album Carousel */}
        <div className="relative max-w-xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevAlbum}
            className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-all"
            aria-label="Previous Album"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextAlbum}
            className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-all"
            aria-label="Next Album"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Album Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAlbumIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="grid grid-cols-2 ">
                  {albums[currentAlbumIndex].photos.slice(0, 4).map((photo, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setSelectedPhoto(photo.src)}
                      className="aspect-square overflow-hidden shadow-md relative group cursor-pointer"
                    >
                      <img
                        src={photo.thumbnail}
                        srcSet={`${photo.thumbnail} 300w, ${photo.src} 1200w`}
                        sizes="(max-width: 640px) 300px, 1200px"
                        alt={`Prewedding photo ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modal for Full-Screen Image */}
          <AnimatePresence>
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
                  alt="Selected photo"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                />
              </motion.div>
            )}
          </AnimatePresence>

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
                aria-label={`Go to album ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}