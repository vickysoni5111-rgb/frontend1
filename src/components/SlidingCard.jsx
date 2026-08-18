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
  const images = [
    hindustanZinc,
    landt,
    semes,
    bharat,
    relent,
    sk,
    sr,
    monomark,
    dayal,
  ];

  return (
    <section className="w-full bg-[#faf9f4] py-10 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-700">
          Our Clients & Partners
        </h2>

        {/* CSS KEYFRAMES INLINE (Bina tailwind.config ke chalane ke liye) */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused; /* Mouse laane par ruk jayega */
          }
        `}</style>

        {/* MARQUEE CONTAINER */}
        <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* TRACK */}
          <div className="animate-infinite-scroll gap-6 py-4">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex h-28 w-44 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={image}
                  alt={`Client Logo ${index}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SlidingCard;