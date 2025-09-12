import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("Failed to submit contact form");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-100 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-teal-300 rounded-full opacity-30 blur-3xl" />

      {/* Header */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-800 mb-2">
          Get in <span className="text-teal-500">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-cyan-700 font-semibold mb-4">
          We’d Love to Hear From You!
        </p>
        <p className="text-cyan-900 text-lg max-w-2xl mx-auto">
          Whether you need a new water delivery, have a question, or want to
          share feedback, the WOWPIO team is always here for you.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 px-6 relative z-10">
        {[{
          icon: <FaPhoneAlt className="text-cyan-600 text-3xl" />, title: "Phone", text: "+91 93695 35853", link: "tel:+919369535853"
        },{
          icon: <FaWhatsapp className="text-emerald-600 text-3xl" />, title: "WhatsApp", text: "Chat Now", link: "https://wa.me/9369535853"
        },{
          icon: <FaEnvelope className="text-sky-600 text-3xl" />, title: "Email", text: "care@wowpio.com", link: "mailto:care@wowpio.com"
        }].map((info, i) => (
          <motion.a
            key={i}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition border border-cyan-100 hover:shadow-2xl"
          >
            {info.icon}
            <div className="font-bold text-cyan-800 mt-2 mb-1">{info.title}</div>
            <div className="text-cyan-700">{info.text}</div>
          </motion.a>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto my-6 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-cyan-100"
        >
          {submitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-5xl mb-4"
              >
                ✅
              </motion.div>
              <div className="text-teal-700 font-bold text-lg mb-2">
                Thank you for reaching out!
              </div>
              <div className="text-teal-600">
                Our team will get back to you soon.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white/60 backdrop-blur-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white/60 backdrop-blur-md"
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white/60 backdrop-blur-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="px-4 py-3 rounded-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white/60 backdrop-blur-md"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </section>

      {/* Address Section */}
      <section className="max-w-2xl mx-auto text-center mt-12 mb-16 px-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-cyan-50/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-cyan-100"
        >
          <FaMapMarkerAlt className="text-cyan-600 text-3xl mb-2" />
          <div className="font-bold text-cyan-800 mb-1">Our Address</div>
          <div className="text-cyan-700 leading-relaxed">
            G-14, INDUSTRIAL AREA, NAINI,<br />
            PRAYAGRAJ, U.P. 211010<br />
            India
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
