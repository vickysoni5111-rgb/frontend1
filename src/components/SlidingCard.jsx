import React from "react";

// ======================================================
// IMAGES
// ======================================================
import hindustanZinc from "../assets/hindustanzinc1.png";
import landt from "../assets/landt.png";
import semes from "../assets/semes.png";
import bharat from "../assets/bharat.png";
import relent from "../assets/relent.png";
import sk from "../assets/sk.png";
import sr from "../assets/sr.png";
import monomark from "../assets/monomark.png";
import dayal from "../assets/dayal.png";

const SlidingCard = () => {
  // Har ek client/partner ki alag details (Naam aur 2-3 lines ka description)
  const clients = [
    {
      image: hindustanZinc,
      name: "Hindustan Zinc",
      desc: "A global leader in zinc, lead, and silver mining, driving sustainable industrial growth and heavy infrastructure development across operations.",
    },
    {
      image: landt,
      name: "Larsen & Toubro (L&T)",
      desc: "A premier Indian multinational conglomerate engaged in EPC projects, hi-tech manufacturing, and critical infrastructure construction.",
    },
    {
      image: semes,
      name: "SEMES",
      desc: "Specialized industrial engineering and automation partner delivering advanced technical solutions and manufacturing support.",
    },
    {
      image: bharat,
      name: "Bharat Construction",
      desc: "Renowned construction and civil engineering firm focused on innovative structural building, modern architecture, and timely project delivery.",
    },
    {
      image: relent,
      name: "Relent",
      desc: "Committed industrial solutions provider ensuring high-performance execution, equipment reliability, and operational excellence.",
    },
    {
      image: sk,
      name: "S.K. Khetan Group",
      desc: "A trusted name in mining milestones and constructing legacies, known for heavy earthmoving and infrastructural proficiency.",
    },
    {
      image: sr,
      name: "SR Group",
      desc: "Diversified industrial partner delivering robust engineering frameworks, quality materials, and dedicated corporate services.",
    },
    {
      image: monomark,
      name: "Monomark Engineering",
      desc: "Expert engineering consultants and constructors specializing in precision systems, mechanical fabrication, and plant setups.",
    },
    {
      image: dayal,
      name: "Dayal Group",
      desc: "Established enterprise contributing to regional industrial growth through diverse operational sectors and quality-driven services.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f4] py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Our Clients & Partners
        </h2>

        {/* CSS KEYFRAMES INLINE */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* MARQUEE CONTAINER */}
        <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* TRACK (Looping twice for infinite smooth marquee) */}
          <div className="animate-infinite-scroll gap-6 py-4">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex flex-col h-72 w-72 flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-400/60"
              >
                {/* Logo Box */}
                <div className="flex h-24 w-full items-center justify-center rounded-xl bg-gray-50 p-2 border border-gray-100">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details Section (2-4 lines) */}
                <div className="mt-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-600 line-clamp-3">
                      {client.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider">
                    Verified Partner
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SlidingCard;