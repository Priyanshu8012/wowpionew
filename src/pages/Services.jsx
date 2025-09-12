import React from "react";
import {
  FaWater,
  FaHome,
  FaBuilding,
  FaHospitalAlt,
  FaRecycle,
  FaShippingFast,
  FaPhoneAlt,
  FaHandsHelping,
  FaLeaf,
  FaUserShield,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-cyan-600 text-4xl mb-3" />,
    title: "Home Water Delivery",
    desc: (
      <>
        Experience the comfort and convenience of pure drinking water delivered right to your doorstep. WOWPIO offers flexible subscription plans, contactless doorstep delivery, and a variety of bottle sizes (from 10L, 20L to custom packs) to fit every family’s needs.<br /><br />
        <span className="font-semibold text-teal-700">Why Home Delivery?</span><br />
        - No more heavy lifting or last-minute store runs.<br />
        - Hygienic, sealed bottles handled with care.<br />
        - Pause or reschedule anytime with our easy customer portal.
      </>
    ),
  },
  {
    icon: <FaBuilding className="text-emerald-600 text-4xl mb-3" />,
    title: "Corporate & Office Solutions",
    desc: (
      <>
        Hydrate your team, boost productivity, and create a healthy office environment! WOWPIO delivers bulk water, installs dispensers/coolers, and offers dedicated account management for businesses of all sizes.<br /><br />
        <span className="font-semibold text-teal-700">For Offices, Factories & Startups:</span><br />
        - Automated delivery schedules to prevent shortages.<br />
        - Monthly invoicing and flexible payment options.<br />
        - Branded bottles and dispensers available for premium spaces.
      </>
    ),
  },
  {
    icon: <FaHospitalAlt className="text-sky-600 text-4xl mb-3" />,
    title: "Healthcare, Hospitals & Institutions",
    desc: (
      <>
        WOWPIO is trusted by clinics, hospitals, schools, and colleges for uncompromising quality and safety. Our rigorous testing and mineral balance meet all regulatory standards.<br /><br />
        <span className="font-semibold text-teal-700">Institutional Service Highlights:</span><br />
        - Large-volume and emergency water supply.<br />
        - Compliant with all health and safety norms.<br />
        - Special training for staff on safe usage and storage.
      </>
    ),
  },
  {
    icon: <FaRecycle className="text-green-500 text-4xl mb-3" />,
    title: "Eco-Friendly Bottle Exchange & Recycling",
    desc: (
      <>
        Join our sustainability revolution! WOWPIO operates a closed-loop bottle return and recycling program.<br /><br />
        <span className="font-semibold text-teal-700">How It Works:</span><br />
        - Return your empty bottles at each delivery.<br />
        - We clean, sanitize, and reuse – reducing plastic waste.<br />
        - Every returned bottle earns you green rewards!
      </>
    ),
  },
  {
    icon: <FaShippingFast className="text-cyan-700 text-4xl mb-3" />,
    title: "Express & Emergency Delivery",
    desc: (
      <>
        Need water urgently? Our express service guarantees same-day or early morning delivery for all urgent requests.<br /><br />
        <span className="font-semibold text-teal-700">Available 7 Days a Week:</span><br />
        - Just call, WhatsApp, or order online.<br />
        - No extra charges for emergencies.<br />
        - Track your order live via SMS or app.
      </>
    ),
  },
  {
    icon: <FaPhoneAlt className="text-sky-600 text-4xl mb-3" />,
    title: "24/7 Customer Support",
    desc: (
      <>
        Our dedicated team is always available to answer questions, handle requests, and resolve any issue instantly.<br /><br />
        <span className="font-semibold text-teal-700">Multi-channel Support:</span><br />
        - Phone, WhatsApp, Email, and Live Chat.<br />
        - Service in Hindi, English, and regional languages.<br />
        - Fast complaint resolution and feedback rewards.
      </>
    ),
  },
  {
    icon: <FaHandsHelping className="text-cyan-500 text-4xl mb-3" />,
    title: "Event & Bulk Water Supply",
    desc: (
      <>
        Planning a wedding, festival, or sports event? WOWPIO provides high-capacity water tankers, bottled water stands, and on-site staff for seamless hydration at any scale.<br /><br />
        <span className="font-semibold text-teal-700">Event Solutions:</span><br />
        - Custom branding for water bottles.<br />
        - On-demand refills and crowd management.<br />
        - Special offers for NGOs and charitable events.
      </>
    ),
  },
  {
    icon: <FaLeaf className="text-emerald-700 text-4xl mb-3" />,
    title: "Natural Mineral Water",
    desc: (
      <>
        Enjoy the refreshing taste of naturally sourced mineral water. Every bottle is enriched with essential minerals—calcium, magnesium, potassium—for a healthy lifestyle.<br /><br />
        - Naturally alkaline, zero contaminants.<br />
        - Ideal for kids, seniors, and athletes.<br />
        - Lab-tested for every batch.
      </>
    ),
  },
  {
    icon: <FaUserShield className="text-teal-700 text-4xl mb-3" />,
    title: "Quality Assurance & Safety",
    desc: (
      <>
        We promise 100% quality and safety in every drop.<br /><br />
        <span className="font-semibold text-teal-700">Our Commitment:</span><br />
        - Multi-stage RO + UV + Ozone purification.<br />
        - Batch-wise lab reports available on request.<br />
        - Tamper-proof seals and contactless delivery.
      </>
    ),
  },
];

const testimonials = [
  {
    name: "Pooja Sharma",
    feedback: "The WOWPIO team is amazing! I never have to worry about running out of water, and the quality is just unbeatable.",
    stars: 5,
  },
  {
    name: "Rahul Jain",
    feedback: "We use their service for our office and home. Super prompt delivery and support. The bottle exchange system is so eco-friendly.",
    stars: 5,
  },
  {
    name: "Anjali Verma",
    feedback: "Needed water for a family function at short notice—WOWPIO delivered in hours. Highly recommended for events!",
    stars: 5,
  },
];

const Services = () => (
  <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-100 min-h-screen">
    {/* Header */}
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-800 mb-4">
        Our <span className="text-teal-500">Services</span>
      </h1>
      <p className="text-xl md:text-2xl text-cyan-700 font-semibold mb-6">
        Every Drop, Every Need: WOWPIO Delivers More Than Water
      </p>
      <p className="text-cyan-900 text-lg max-w-2xl mx-auto mb-8">
        Discover the complete suite of WOWPIO services—designed for families, offices, events, and institutions. From eco-friendly home delivery to large-scale event supply, we handle every hydration need with care, technology, and a smile.
      </p>
    </section>

    {/* Services Grid */}
    <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform"
        >
          {s.icon}
          <h2 className="text-xl font-bold text-cyan-800 mb-2">{s.title}</h2>
          <p className="text-cyan-700 text-sm">{s.desc}</p>
        </div>
      ))}
    </section>

    {/* Testimonials */}
    <section className="bg-teal-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-8 text-center">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-cyan-800 mb-3">"{t.feedback}"</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-cyan-700">{t.name}</span>
                {[...Array(t.stars)].map((_, j) => (
                  <FaStar key={j} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="max-w-4xl mx-auto text-center mt-12 pb-16 mb-0 px-4">
      <h3 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">
        Need a Custom Solution?
      </h3>
      <p className="text-cyan-700 mb-6">
        From large events to residential complexes and hospitals, our expert team is ready to create a tailor-made water solution just for you. Contact us now and experience the WOWPIO difference!
      </p>
      <a
        href="/contact"
        className="inline-block bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
      >
        Get in Touch
      </a>
    </section>
  </div>
);

export default Services;
