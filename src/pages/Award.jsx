import React from "react";
import ISIbg from "../assets/award/ISIbg.png";
import fassaibg from "../assets/award/fassaibg.png";
import HACCPbg from "../assets/award/HACCPbg.png";
import boisbg from "../assets/award/boisbg.png";

// ✅ Award Data
const awards = [
  {
    id: 1,
    title: "ISI Certification",
    description: "Recognized for quality and safety standards.",
    image: ISIbg,
  },
  {
    id: 2,
    title: "FASSI Award",
    description: "Excellence in sustainable water solutions.",
    image: fassaibg,
  },
  {
    id: 3,
    title: "HACCP Certification",
    description: "Ensuring the highest hygiene and food safety standards.",
    image: HACCPbg,
  },
  {
    id: 4,
    title: "BOIS Recognition",
    description: "Honored for innovation and sustainability initiatives.",
    image: boisbg,
  },
];

const Award = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
        Our Awards & Recognitions
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {awards.map((award) => (
          <div
            key={award.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl duration-500"
          >
            <div className="bg-cyan-50 p-4 rounded-full mb-4 flex items-center justify-center w-24 h-24">
              <img
                src={award.image}
                alt={award.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-blue-900 font-bold text-lg mb-2">
              {award.title}
            </h3>
            <p className="text-cyan-800 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Award;
