import React, { useState } from "react";
import img from "../assets/product/Commingsoon.png";
import One from "../assets/product/1000.png";
import OneO from "../assets/product/10003.png";
import OneTwo from "../assets/product/10002.png";
import Five from "../assets/product/500.png";

// ✅ Bottle Icon
const BottleIcon = ({ size = 42 }) => (
  <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
    <rect x="12" y="4" width="14" height="28" rx="7" fill="#13bdb7" />
    <rect x="15" y="2" width="8" height="4" rx="2" fill="#1979ab" />
    <rect
      x="13"
      y="32"
      width="12"
      height="3"
      rx="1.5"
      fill="#1979ab"
      opacity="0.15"
    />
    <rect
      x="16"
      y="35"
      width="6"
      height="2"
      rx="1"
      fill="#13bdb7"
      opacity="0.5"
    />
  </svg>
);

// ✅ Products Data
const products = [
  {
    tab: "All",
    items: [
      {
        name: "ROUND BOTTLE 250ml",
        img: img,
        price: "₹ 15.00",
        desc: "Aqua Wow Packaged Drinking Water - 250ml Round Bottle. Pure, portable hydration for on-the-go.",
      },
      {
        name: "ROUND BOTTLE 500ml",
        img: Five,
        price: "₹ 10.00",
        desc: "Aqua Wow Packaged Drinking Water - 500ml Round Bottle. Perfect balance for everyday refreshment.",
      },
      {
        name: "ROUND BOTTLE 1L ",
        img: One,
        extraImgs: [One, OneO], // ✅ Multiple images for hover effect
        price: "₹ 20.00",
        desc: "Aqua Wow Packaged Drinking Water - 1L Round Bottle. Available in 3 premium variants.",
      },
      {
        name: "ROUND BOTTLE 2L",
        img: img,
        price: "₹ 45.00",
        desc: "Aqua Wow Packaged Drinking Water - 2L Round Bottle. Ideal for families and gatherings.",
      },
    ],
  },
  {
    tab: "ROUND BOTTLE 250ml",
    items: [
      {
        name: "ROUND BOTTLE 250ml",
        img: img,
        price: "₹ 15.00",
        desc: "Aqua Wow Packaged Drinking Water - 250ml Round Bottle. Pure, portable hydration for on-the-go.",
        badge: "Best Seller",
      },
    ],
  },
  {
    tab: "ROUND BOTTLE 500ml",
    items: [
      {
        name: "ROUND BOTTLE 500ml",
        img: Five,
        price: "₹ 10.00",
        desc: "Aqua Wow Packaged Drinking Water - 500ml Round Bottle. Perfect balance for everyday refreshment.",
        badge: "Popular",
      },
    ],
  },
  {
    tab: "ROUND BOTTLE 1L",
    items: [
      {
        name: "ROUND BOTTLE 1L ",
        img: One,
        extraImgs: [One, OneO, OneTwo],
        price: "₹ 20.00",
        desc: "Aqua Wow Packaged Drinking Water - 1L Round Bottle. Available in 3 premium variants.",
      },
    ],
  },
  {
    tab: "ROUND BOTTLE 2L",
    items: [
      {
        name: "ROUND BOTTLE 2L",
        img: img,
        price: "₹ 45.00",
        desc: "Aqua Wow Packaged Drinking Water - 2L Round Bottle. Ideal for families and gatherings.",
        badge: "Family Pack",
      },
    ],
  },
];

// ✅ Tabs
const tabNames = [
  "All",
  "ROUND BOTTLE 250ml",
  "ROUND BOTTLE 500ml",
  "ROUND BOTTLE 1L",
  "ROUND BOTTLE 2L",
];

const phoneNumber = "919369535853";

function getWhatsappLink(product) {
  const message = `
Order Request:
Product: ${product.name}
Price: ${product.price}
Details: ${product.desc}
  `.trim();
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

const AquaWowopioProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const activeProducts =
    products.find((cat) => cat.tab === activeTab)?.items || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e0fdff 0%, #cbe2ee 60%, #e0ffe6 100%)",
        paddingBottom: "40px",
      }}
    >
      {/* ✅ Header */}
      <header className="w-full text-center pt-10 pb-5">
        <h1
          className="text-5xl font-extrabold text-[#13bdb7] tracking-tight mb-2 drop-shadow-lg"
          style={{
            fontFamily: "Montserrat, sans-serif",
            textShadow: "1px 3px 7px #b2ebf2",
          }}
        >
          Aqua Wowopio
        </h1>
        <p
          className="text-[#1979ab] text-xl font-semibold mb-8"
          style={{ letterSpacing: "0.7px" }}
        >
          Premium Packaged Drinking Water for Every Need
        </p>

        {/* ✅ Tabs */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          {tabNames.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-bold text-base transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[#21d375] text-white shadow-xl scale-105"
                    : "bg-[#e3f0fa] text-[#1979ab] hover:bg-[#b4e1fa] hover:text-[#1979ab]"
                }
              `}
              style={{
                minWidth: "180px",
                marginBottom: "12px",
                fontWeight: activeTab === tab ? 800 : 600,
                border: "none",
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* ✅ Products Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
        {activeProducts.map((product, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl shadow-lg p-7 flex flex-col items-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            style={{
              minHeight: "430px",
              border: "2px solid #e0fdff",
              boxShadow: "0 10px 40px #13bdb72c",
            }}
          >
            {/* Badge */}
            {product.badge && (
              <span
                className="absolute top-5 left-5 bg-gradient-to-r from-[#13bdb7] to-[#21d375] text-white text-xs px-3 py-1 rounded-full font-bold shadow"
                style={{
                  fontSize: "0.80rem",
                  letterSpacing: "1px",
                  zIndex: 10,
                }}
              >
                {product.badge}
              </span>
            )}

            {/* Decorative bottle icon */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
              <BottleIcon size={42} />
            </span>

            {/* Product Image with Hover Effect for 1L */}
            <div className="w-36 h-36 rounded-xl overflow-hidden shadow mb-4 bg-[#e3f0fa] flex items-center justify-center relative border-2 border-[#b4e1fa]">
              {product.extraImgs ? (
                <div className="relative w-full h-full group">
                  {product.extraImgs.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`${product.name}-${idx}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                        idx === 0
                          ? "opacity-100 group-hover:opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-full h-full transition-all duration-500 hover:scale-110"
                  loading="lazy"
                  style={{
                    borderRadius: 12,
                    filter: "drop-shadow(0 2px 8px #e0f7fa)",
                  }}
                />
              )}
            </div>

            {/* Product Info */}
            <h2
              className="text-lg font-extrabold text-[#1979ab] mb-1 text-center uppercase"
              style={{ letterSpacing: "0.5px" }}
            >
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
              {product.desc}
            </p>

            {/* Price */}
            <span className="py-2 px-6 rounded-lg font-bold text-lg bg-gradient-to-r from-[#13bdb7] to-[#21d375] text-white mb-2 shadow-md tracking-wider text-center">
              {product.price}
            </span>

            {/* Order Button */}
            <a
              href={getWhatsappLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-2 rounded-full font-bold bg-gradient-to-r from-[#ccb94e] to-[#c39709] text-[#232323] text-center transition-all mt-auto shadow hover:shadow-xl hover:scale-[1.02]"
              style={{
                letterSpacing: "1.1px",
                marginTop: "12px",
                fontSize: "1.09rem",
                fontWeight: 800,
              }}
            >
              Order Now
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AquaWowopioProducts;
