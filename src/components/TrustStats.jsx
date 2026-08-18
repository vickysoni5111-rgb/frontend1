import React, { useEffect, useRef, useState } from "react";
import constructionImage from "../assets/raman1.png";

// ======================================================
// ANIMATED NUMBER
// ======================================================

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const duration = 1600;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(eased * value));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ======================================================
// TRUST STATS
// ======================================================

const TrustStats = () => {
  const stats = [
    {
      value: 10,
      suffix: "+",
      title: "Years Experience",
      description: "Industry experience",
    },
    {
      value: 150,
      suffix: "+",
      title: "Projects",
      description: "Successfully delivered",
    },
    {
      value: 50,
      suffix: "+",
      title: "Happy Clients",
      description: "Built on trust",
    },
    {
      value: 100,
      suffix: "%",
      title: "Commitment",
      description: "Quality focused",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f3ec] py-20 sm:py-24">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div data-aos="fade-right" className="relative">

            {/* Yellow Border */}

            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[30px] border-2 border-yellow-400/60 sm:block" />

            <div className="group relative z-10 overflow-hidden rounded-[30px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.22)]">

              <div className="relative h-[360px] sm:h-[460px] lg:h-[540px]">

                <img
                  src={constructionImage}
                  alt="Pawan Putra Enterprises construction project"
                  className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/40 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-yellow-400 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                    Pawan Putra Enterprises

                  </span>

                  <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">

                    Building With

                    <span className="block text-yellow-400">
                      Purpose & Precision.
                    </span>

                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/65">

                    Professional planning, quality execution and dependable
                    construction solutions built for long-term value.

                  </p>

                </div>

                {/* Badge */}

                <div className="absolute right-5 top-5 rounded-2xl border border-yellow-400/30 bg-black/75 px-5 py-4 shadow-xl backdrop-blur-md">

                  <p className="text-3xl font-black text-yellow-400">
                    10+
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/55">
                    Years Experience
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div data-aos="fade-left">

            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-yellow-700">

              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />

              Our Experience

            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#11110f] sm:text-5xl">

              Experience That

              <span className="block text-yellow-600">
                Makes a Difference.
              </span>

            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-yellow-500" />

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">

              Over the years, we have built our work around quality,
              reliability and long-term relationships. Every project
              represents our commitment to delivering dependable results.

            </p>

            {/* Stats */}

            <div className="mt-9 grid grid-cols-2 gap-5">

              {stats.map((item, index) => (

                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl"
                >

                  <div className="absolute left-0 top-0 h-1 w-0 bg-yellow-500 transition-all duration-500 group-hover:w-full" />

                  <div className="text-4xl font-black text-[#11110f] group-hover:text-yellow-600">

                    <AnimatedNumber
                      value={item.value}
                      suffix={item.suffix}
                    />

                  </div>

                  <div className="mt-3 h-1 w-7 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-14" />

                  <h3 className="mt-4 text-sm font-extrabold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-1 text-xs text-slate-500">

                    {item.description}

                  </p>

                </div>

              ))}

            </div>

            {/* Bottom Statement */}

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

              <div className="h-10 w-1 rounded-full bg-yellow-500" />

              <p className="text-sm leading-6 text-slate-600">

                Quality workmanship, professional execution and

                <span className="font-extrabold text-yellow-700">
                  {" "}commitment to every project.
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrustStats;