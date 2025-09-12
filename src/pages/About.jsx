import React, { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaRecycle,
  FaUserTie,
  FaStar,
  FaHandHoldingWater,
  FaSmile,
  FaRocket,
  FaUsers,
  FaTint,
  FaBuilding,
} from "react-icons/fa";

import img1 from "../assets/gallery/Aboout.png";

// ✅ Animated Counter Hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    let raf;
    function step(timestamp) {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      start.current = null;
    };
  }, [target, duration]);

  return count;
}

const About = () => {
  const happyCustomers = useCountUp(10000, 2000);
  const litresDelivered = useCountUp(500000, 2100);
  const corporatePartners = useCountUp(100, 1800);
  const [rating, setRating] = useState(0);

  // ✅ Fix rating animation
  useEffect(() => {
    let raf;
    function animateRating() {
      setRating((prev) => {
        if (prev < 4.9) {
          raf = requestAnimationFrame(animateRating);
          return Math.min(prev + 0.07, 4.9);
        }
        return 4.9;
      });
    }
    raf = requestAnimationFrame(animateRating);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 min-h-screen">
      {/* ✅ Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          About <span className="text-cyan-500">WOWPIO</span>
        </h1>
        <p className="text-xl md:text-2xl text-cyan-700 font-semibold mb-6">
          Committed to Delivering Pure, Healthy, and Sustainable Water Solutions
        </p>
        <p className="text-blue-900 text-lg max-w-2xl mx-auto mb-8">
          At WOWPIO, we believe access to pure and safe drinking water is a
          right, not a privilege. Since our inception, we have been on a mission
          to revolutionize hydration, combining advanced purification,
          eco-conscious practices, and exceptional service for families and
          businesses across the region.
        </p>
      </section>

      {/* ✅ Story Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Story</h2>
          <p className="text-cyan-800 mb-4 leading-relaxed">
            Founded by a passionate team of health, technology, and
            sustainability enthusiasts, WOWPIO began with a simple yet ambitious
            vision:{" "}
            <span className="font-semibold text-cyan-600">
              to set a new standard for water quality in India
            </span>
            .
            <br />
            <br />
            From humble beginnings, delivering our first bottles on bicycles, we
            have grown into a trusted name, serving thousands of happy customers
            and partnering with leading organizations, schools, and hospitals.
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
            Our Vision
          </h2>
          <p className="text-cyan-800 leading-relaxed">
            To empower every individual and community with access to the purest
            water, while leaving a positive impact on the environment and
            society.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src={img1}
            alt="WOWPIO Facility"
            className="w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <div className="text-cyan-700 text-center text-sm italic">
            Our state-of-the-art purification plant in action.
          </div>
        </div>
      </section>

      {/* ✅ Numbers Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 text-center">
          WOWPIO in Numbers
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <FaUsers className="text-cyan-500 text-4xl mx-auto mb-3" />
            <div className="text-4xl font-extrabold text-cyan-600 mb-2">
              {happyCustomers.toLocaleString()}+
            </div>
            <div className="text-cyan-700 font-semibold">Happy Customers</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <FaTint className="text-emerald-500 text-4xl mx-auto mb-3" />
            <div className="text-4xl font-extrabold text-emerald-500 mb-2">
              {Math.floor(litresDelivered / 1000)} Lakh+
            </div>
            <div className="text-cyan-700 font-semibold">Litres Delivered</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <FaBuilding className="text-teal-500 text-4xl mx-auto mb-3" />
            <div className="text-4xl font-extrabold text-teal-600 mb-2">
              {corporatePartners}+
            </div>
            <div className="text-cyan-700 font-semibold">
              Corporate Partners
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <FaStar className="text-yellow-400 text-4xl mx-auto mb-3" />
            <div className="text-4xl font-extrabold text-yellow-400 mb-2">
              {rating.toFixed(1)}
            </div>
            <div className="text-cyan-700 font-semibold">Average Ratings</div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Choose WOWPIO?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all">
            <FaHandHoldingWater className="text-cyan-500 text-4xl mb-3" />
            <h3 className="font-bold text-blue-900 mb-2">
              Advanced Purification
            </h3>
            <p className="text-cyan-800 text-center">
              Multi-stage RO+UV+Mineralization technology guarantees every drop
              is clean, safe, and naturally tasty.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all">
            <FaRecycle className="text-emerald-500 text-4xl mb-3" />
            <h3 className="font-bold text-blue-900 mb-2">Eco-Commitment</h3>
            <p className="text-cyan-800 text-center">
              We use recyclable packaging and actively promote zero-plastic
              waste initiatives in all our operations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all">
            <FaUserTie className="text-teal-500 text-4xl mb-3" />
            <h3 className="font-bold text-blue-900 mb-2">Customer Focus</h3>
            <p className="text-cyan-800 text-center">
              24/7 support, flexible delivery, and an unwavering commitment to
              customer satisfaction define our service.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Core Values Section */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
          Our Core Values
        </h2>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="flex items-start gap-4">
            <FaGlobe className="text-cyan-500 text-2xl mt-1" />
            <div>
              <strong className="text-blue-900">Integrity & Transparency:</strong>
              <div className="text-cyan-800">
                We keep our promises and are honest in every drop we deliver.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <FaRecycle className="text-emerald-500 text-2xl mt-1" />
            <div>
              <strong className="text-blue-900">
                Environmental Responsibility:
              </strong>
              <div className="text-cyan-800">
                We strive for a cleaner earth through green packaging and
                sustainable practices.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <FaSmile className="text-yellow-400 text-2xl mt-1" />
            <div>
              <strong className="text-blue-900">Customer Delight:</strong>
              <div className="text-cyan-800">
                Exceeding expectations, every day, every delivery.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <FaRocket className="text-teal-500 text-2xl mt-1" />
            <div>
              <strong className="text-blue-900">Innovation:</strong>
              <div className="text-cyan-800">
                Constantly improving and adopting the latest technology for pure
                water solutions.
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Join the WOWPIO Family
        </h2>
        <p className="text-cyan-800 mb-6 max-w-2xl mx-auto">
          Experience the WOWPIO difference yourself. Whether for your home,
          office, or community, choose us for purity, service, and
          sustainability. Your health, our promise!
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
