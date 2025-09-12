import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// ✅ Local assets
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import videoFile from "../assets/gallery/video.mov";
import VideoFile1 from "../assets/gallery/xyz.mp4";

// ✅ Gallery items
const galleryItems = [
  { type: "video", src: videoFile, caption: "WOWPIO in Action 🎥" },
  { type: "image", src: img1, caption: "State-of-the-art purification plant" },
  { type: "image", src: img2, caption: "WOWPIO delivery fleet ready for dispatch" },
   { type: "video", src: VideoFile1, caption: "Customer enjoying a glass of WOWPIO water" },
  { type: "image", src: img3, caption: "Bottling with strict quality checks" },

  { type: "image", src: img5, caption: "Happy WOWPIO family moments" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-30 animate-bubble"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              bottom: `-${Math.random() * 120}px`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💧 WOWPIO Gallery
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-3">
          Moments of Purity, Service, and Smiles
        </p>
        <p className="text-gray-900 max-w-2xl mx-auto leading-relaxed">
          Step into the WOWPIO world — delivering purity, sustainability, and
          happiness to homes, businesses, and communities every day.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.figure
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 cursor-pointer hover:shadow-cyan-400/50"
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.03 }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-72 bg-black overflow-hidden">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-90 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-70 animate-pulse" />
                      <div className="relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 text-white text-lg font-semibold tracking-wide opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-r from-pink-500/70 via-purple-600/70 to-cyan-500/70 backdrop-blur-md rounded-full px-5 py-2">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center max-w-4xl mx-auto px-4 pb-24 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 drop-shadow-lg">
          📸 Be a Part of Our Story
        </h3>
        <p className="text-gray-700 mb-6">
          Share your WOWPIO moments with us! Tag{" "}
          <span className="text-pink-500 font-semibold">#WOWPIO</span> on social
          media for a chance to be featured.
        </p>
        <a
          href="/contact"
          className="relative inline-block px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">Get in Touch</span>
          <span className="absolute inset-0 bg-white/20 blur-lg opacity-0 hover:opacity-100 transition duration-500" />
        </a>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-cyan-400 transition"
              onClick={closeModal}
            >
              <X />
            </button>

            <button
              className="absolute left-6 text-white text-4xl hover:text-cyan-400 transition"
              onClick={prevSlide}
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute right-6 text-white text-4xl hover:text-cyan-400 transition"
              onClick={nextSlide}
            >
              <ChevronRight />
            </button>

            <motion.div
              key={currentIndex}
              className="max-h-[80vh] max-w-5xl rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {galleryItems[currentIndex].type === "image" ? (
                <img
                  src={galleryItems[currentIndex].src}
                  alt="Full View"
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  src={galleryItems[currentIndex].src}
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
