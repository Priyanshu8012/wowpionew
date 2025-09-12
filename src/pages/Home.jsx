import React, { useState } from "react";
import { FaWater, FaLeaf, FaTruck, FaHandsHelping, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import HeroSection from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    icon: <FaWater className="text-cyan-500 text-5xl mb-4" />,
    title: "Ultra-Pure Water",
    desc: "Multi-stage purification ensures every drop is crystal clear, healthy, and refreshing.",
  },
  {
    icon: <FaLeaf className="text-emerald-500 text-5xl mb-4" />,
    title: "Eco-Friendly",
    desc: "100% recyclable bottles & sustainable operations that care for the planet.",
  },
  {
    icon: <FaTruck className="text-cyan-600 text-5xl mb-4" />,
    title: "Fast Delivery",
    desc: "WOWPIO water, delivered fresh to your doorstep with speed and reliability.",
  },
  {
    icon: <FaHandsHelping className="text-indigo-500 text-5xl mb-4" />,
    title: "Exceptional Service",
    desc: "24/7 support & customer-first approach with a smile, every time.",
  },
];

const testimonials = [
  {
    text: "WOWPIO water is the freshest I've ever tasted. My family absolutely loves it!",
    name: "Aman Sharma",
    color: "bg-cyan-100 text-cyan-700",
    initial: "A",
  },
  {
    text: "I appreciate the eco-friendly approach. The recyclable bottles are a big plus!",
    name: "Riya Patel",
    color: "bg-emerald-100 text-emerald-700",
    initial: "R",
  },
  {
    text: "Excellent service and ultra-pure water! I feel healthier since switching to WOWPIO.",
    name: "Sandeep Singh",
    color: "bg-indigo-100 text-indigo-700",
    initial: "S",
  },
  {
    text: "Quick delivery and refreshing taste every time! Highly recommended.",
    name: "Neha Verma",
    color: "bg-pink-100 text-pink-700",
    initial: "N",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("packaged");

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-teal-100 min-h-screen">
      {/* Hero Banner */}
      <HeroSection />

      {/* Slogan */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-6 mb-14 px-4 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-3">
          "Hydrate Your Life. Refresh Your World."
        </h3>
        <p className="text-cyan-700 text-lg">
          Every drop of WOWPIO is a step towards a healthier, energized, and sustainable lifestyle.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl border border-cyan-100 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform"
          >
            {f.icon}
            <h4 className="text-xl font-bold text-cyan-800 mb-2">{f.title}</h4>
            <p className="text-cyan-700 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Slider */}
      <section className="bg-gradient-to-r from-cyan-50 to-teal-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-extrabold text-center text-cyan-800 mb-12">
            What Our Customers Say
          </h3>
          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="px-4"
              >
                <div className="bg-white/90 backdrop-blur-lg border border-cyan-100 p-8 rounded-2xl shadow-lg text-center h-full flex flex-col justify-between hover:shadow-xl transition">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 mb-4">
                    <FaQuoteLeft className="text-cyan-500 text-xl" />
                  </div>
                  <p className="text-cyan-800 text-lg italic leading-relaxed mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}
                    >
                      {t.initial}
                    </span>
                    <span className="text-cyan-700 font-semibold">{t.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mt-20 mb-0 pb-20 px-4"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-4">
          Ready to Experience True Hydration?
        </h3>
        <p className="text-cyan-700 mb-6 text-lg">
          Join thousands of happy customers. Make the switch to WOWPIO and taste the difference!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg hover:shadow-cyan-300/50 hover:scale-105 transition-transform"
        >
          Order Now
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
