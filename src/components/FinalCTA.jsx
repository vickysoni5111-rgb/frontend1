import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import mainImage from "../assets/mainpagepic1.png";

const FinalCTA = () => {
  const features = [
    "Professional Execution",
    "Quality Focused",
    "Reliable Solutions",
    "Client Focused",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf9f4] via-[#f6f3e9] to-slate-100 py-14 sm:py-16 lg:py-20">
      {/* =====================================================
          SOFT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Gold Glow */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

        {/* Center Soft Glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

        {/* Right Gold Glow */}
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-100/40 blur-3xl" />

        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/30 via-transparent to-yellow-100/20" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div data-aos="fade-right" className="max-w-xl">
            {/* Small Label */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />

              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-700">
                Let's Build Together
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              Strong Foundations.
              <br />
              <span className="text-yellow-500">Better Futures.</span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-lg text-xs leading-6 text-slate-600 sm:text-sm">
              From construction and infrastructure to complete project
              development, we bring professional planning, quality
              workmanship and dependable execution to every project.
            </p>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    strokeWidth={2.5}
                    className="shrink-0 text-yellow-600"
                  />

                  <span className="text-[11px] font-semibold text-slate-700 sm:text-xs">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-[11px] font-black uppercase tracking-wide text-yellow-400 shadow-md shadow-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-black"
              >
                Start Your Project
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-[11px] font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Soft Decorative Border */}

            <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-yellow-200 sm:-right-3 sm:-top-3" />

            {/* IMAGE CARD */}
            <div className="group relative overflow-hidden rounded-2xl border border-white bg-white p-1.5 shadow-2xl shadow-yellow-900/10">
              {/* Fixed Image Area */}

              <div className="relative h-[270px] overflow-hidden rounded-[14px] sm:h-[330px] lg:h-[390px]">
                <img
                  src={mainImage}
                  alt="Construction and infrastructure project"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Light Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Top Badge */}

                <div className="absolute left-4 top-4 rounded-full border border-yellow-200 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <span className="text-[8px] font-black uppercase tracking-[0.16em] text-yellow-700">
                    Our Projects
                  </span>
                </div>

                {/* Image Text */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="mb-2 h-0.5 w-8 rounded-full bg-yellow-400" />

                  <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
                    Built With Purpose
                    <br />
                    & Precision.
                  </h3>

                  <p className="mt-2 max-w-sm text-[10px] leading-5 text-slate-200">
                    Quality construction, thoughtful planning and
                    professional execution.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING PROJECT BADGE
            ================================================= */}

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="absolute -bottom-4 -left-2 rounded-xl border border-yellow-200 bg-slate-950 px-4 py-3 shadow-lg sm:-left-4"
            >
              <p className="text-lg font-black leading-none text-yellow-400">
                150+
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-wider text-white/60">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
        />
      </div>
    </section>
  );
};

export default FinalCTA;