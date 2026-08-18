import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import logo from "../assets/logo11.png";
import mainpic1 from "../assets/mainpic1.png"; // Optimized Main Banner Image
import employeeImage from "../assets/employe.png";
import workImage from "../assets/work.png";
import siteImage from "../assets/site.png";
import loaderImage from "../assets/loader.png";

// Optimized Corner Marks Component
const CornerMarks = ({ tone = "brass", size = "16" }) => {
  const color = tone === "brass" ? "#B98B3E" : "rgba(255,255,255,0.45)";
  const offset = parseInt(size) / 2;
  const Mark = ({ className, strokeWidth = "1.5" }) => (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <path
        d={`M${offset} 0V${size}M0 ${offset}H${size}`}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
  return (
    <>
      <Mark className="pointer-events-none absolute left-2 top-2 opacity-80" strokeWidth="1.2" />
      <Mark className="pointer-events-none absolute right-2 top-2 opacity-80" strokeWidth="1.2" />
      <Mark className="pointer-events-none absolute bottom-2 left-2 opacity-80" strokeWidth="1.2" />
      <Mark className="pointer-events-none absolute bottom-2 right-2 opacity-80" strokeWidth="1.2" />
    </>
  );
};

// Technical Blueprint Grid
const BlueprintGrid = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(185,139,62,0.11) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(185,139,62,0.11) 1.5px, transparent 1.5px)",
      backgroundSize: "48px 48px",
    }}
  />
);

// Main Project Page
const Project = () => {
  useEffect(() => {
    // Advanced AOS Initialization
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-in-out-cubic",
    });

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        AOS.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      number: "01",
      status: "Work In Progress",
      company: "SK KHETAN - HINDUSTAN ZINC BKM MINES",
      title: "Mining Civil Framework and Heavy Infrastructure Development",
      value: "\u20B929.50 Crore",
      year: "2025-2026",
      category: "Mining & Heavy Civil",
    },
    {
      number: "02",
      status: "Work In Progress",
      company: "SK KHETAN",
      title: "Boundary Wall Work - UltraTech Cement Plant, Pindwara",
      value: "\u20B92.55 Crore",
      year: "2025-2026",
      category: "Plant Infrastructure",
    },
    {
      number: "03",
      status: "Work In Progress",
      company: "SK KHETAN INFRAPROJECTS PVT. LTD.",
      title: "Civil Work, Repair & Maintenance Operations",
      value: "\u20B92.89 Crore",
      year: "2025-2026",
      category: "Operations & Maintenance",
    },
    {
      number: "04",
      status: "Work In Progress",
      company: "SANWARIYA MULTIVENTURES LIMITED",
      title: "Civil Construction and Development Jobs",
      value: "\u20B96.77 Crore",
      year: "2026-2027",
      category: "Civil Construction",
    },
    {
      number: "05",
      status: "Completed",
      company: "SHRI RAJENDRA KUMAR KALAL",
      title: "Civil Work, Asphalt Road Work & Heavy Stone Masonry",
      value: "\u20B96.95 Crore",
      year: "2025-2026",
      category: "Road & Masonry Works",
    },
    {
      number: "06",
      status: "Completed",
      company: "SHRI RAJENDRA KUMAR KALAL",
      title: "Infrastructure Engineering and Construction Development",
      value: "\u20B93.73 Crore",
      year: "2023-2024",
      category: "Engineering Development",
    },
    {
      number: "07",
      status: "Completed",
      company: "BHERUNATH CONSTRUCTION PVT. LTD.",
      title: "Civil Work & Specialized Site Grading Infrastructure",
      value: "\u20B92.99 Crore",
      year: "2022-2023",
      category: "Specialized Civil Works",
    },
    {
      number: "08",
      status: "Completed",
      company: "BHARAT CONSTRUCTION COMPANY",
      title: "Inter-City Road Infrastructure and Safety Boundary Works",
      value: "\u20B92.55 Crore",
      year: "2019-2020",
      category: "Inter-City Infrastructure",
    },
    {
      number: "09",
      status: "Completed",
      company: "ACES INFRADEV PVT. LTD.",
      title: "Civil Engineering Development and Infrastructure Support",
      value: "\u20B91.35 Crore",
      year: "2020-2021",
      category: "Infrastructure Support",
    },
    {
      number: "10",
      status: "Completed",
      company: "BALAJI CONSTRUCTION COMPANY",
      title: "Regional Drainage, Excavation, and Concrete Works",
      value: "\u20B992.61 Lakh",
      year: "2022-2023",
      category: "Regional Civil Works",
    },
    {
      number: "11",
      status: "Completed",
      company: "ARAI RAILMAGRA PROJECT",
      title: "Highway Quality Asphalt Road Sub-grade and Surface Work",
      value: "\u20B969.00 Lakh",
      year: "2020-2021",
      category: "Highway Development",
    },
    {
      number: "12",
      status: "Completed",
      company: "ARAI RAILMAGRA PROJECT",
      title: "Substation Cabling, High Tension Powerlines & Electrification",
      value: "\u20B967.00 Lakh",
      year: "2020-2021",
      category: "Electrical Infrastructure",
    },
    {
      number: "13",
      status: "Completed",
      company: "FIRE FIGHTING WORK",
      title: "Industrial Sprinklers and High-Pressure Valve Pipelines",
      value: "\u20B923.00 Lakh",
      year: "2020-2021",
      category: "Industrial Safety",
    },
  ];

  const summary = [
    { number: "13+", title: "MAJOR CONTRACTS" },
    { number: "\u20B958+ CR", title: "PROJECT PORTFOLIO" },
    { number: "10+", title: "YEARS EXPERIENCE" },
    { number: "100%", title: "COMMITMENT" },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#ECE7DA] text-[#15140F] antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        .font-display { font-family: 'Oswald', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .font-main { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ==================================================
          HERO & BANNER SECTION (Full Image, Clean Layout)
      ================================================== */}
      <section className="relative overflow-hidden bg-[#0A0A09] min-h-[560px] pt-24 pb-20 sm:min-h-[640px] sm:pt-28 sm:pb-28 flex items-end">

        {/* Background Image - shown in full, no eyebrow strip on top of it */}
        <div className="absolute inset-0 z-0">
          <img
            src={mainpic1}
            alt="Pawanputra Enterprises project banner"
            className="h-full w-full object-cover object-[center_35%]"
          />
          {/* Overlay tuned so the photo stays clearly visible, text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/55 to-[#0A0A09]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A09]/80 via-[#0A0A09]/25 to-transparent" />
        </div>

        <BlueprintGrid className="opacity-25 z-10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 z-20">
          <div data-aos="fade-up" className="max-w-4xl">
            <h1 className="font-display text-5xl font-black uppercase leading-[0.98] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
              Project
              <span className="block bg-gradient-to-r from-[#FFD700] via-[#C9A257] to-white bg-clip-text text-transparent">
                Portfolio.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl border-l-2 border-[#B98B3E] pl-5 font-main text-base leading-8 text-white/90 sm:text-lg">
              A comprehensive ledger detailing our execution of major civil contracts,
              specialized mining works, and heavy infrastructure developments across
              Rajasthan and beyond. Reliable execution, practical engineering.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative mt-16 grid grid-cols-2 overflow-hidden border border-white/20 bg-[#0A0A09]/60 sm:grid-cols-4 backdrop-blur-md rounded-sm shadow-2xl"
          >
            {summary.map((item, index) => (
              <div
                key={item.title}
                className={`px-6 py-8 sm:px-8 ${
                  index !== summary.length - 1
                    ? "border-b border-white/15 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <p className="font-mono text-3xl font-extrabold text-[#FFD700] sm:text-4xl tabular-nums">
                  {item.number}
                </p>
                <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          PRACTICAL EXECUTION STRIP (Pic-Grid)
      ================================================== */}
      <section className="bg-[#F5F2E9] py-20 sm:py-24 border-y border-[#B98B3E]/15">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div data-aos="fade-right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B98B3E]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A6A2E] font-bold">
                Engineered for Results
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-tight text-[#15140F] sm:text-5xl tracking-tighter">
              Planning to
              <span className="block text-[#B98B3E]"> Disciplined</span>
              Execution.
            </h2>

            <p className="mt-6 max-w-xl font-main text-base leading-8 text-[#4A463D]">
              Our project ledger represents real, verifiable construction work executed across various demanding environments. From technical planning to field machinery operations, every entry defines our commitment.
            </p>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-3 gap-4 lg:gap-5">
            {[employeeImage, workImage, siteImage].map((img, i) => (
              <div key={i} className={`relative overflow-hidden border border-[#15140F]/10 rounded-sm shadow-md group ${i === 1 ? 'mt-10' : ''}`}>
                <img
                  src={img}
                  alt={`Construction visual ${i + 1}`}
                  className="h-56 w-full object-cover transition-all duration-700 hover:scale-110 sm:h-64 lg:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN PROJECT LIST SECTION WITH PERFECT LOGO CARDS
      ================================================== */}
      <section className="relative bg-[#ECE7DA] py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-aos="fade-up" className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A6A2E] font-bold">
                LEDGER 01-13
              </span>
              <span className="h-px w-10 bg-[#B98B3E]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A6A2E] font-bold">
                ON-RECORD CONTRACTS
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-tight text-[#15140F] sm:text-5xl lg:text-6xl tracking-tighter">
              Experience
              <span className="text-[#B98B3E]"> In Action.</span>
              Proven Capability.
            </h2>

            <p className="mt-5 max-w-2xl font-main text-base leading-8 text-[#6B665A]">
              Pawanputra Enterprises prides itself on verifiability. Every entry below is a recorded, authentic contract executed or managed by our specialized teams. Discover our practical engineering expertise.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 hidden h-full w-[1.5px] bg-[#15140F]/10 md:block" />

            <div className="space-y-7 md:space-y-8">
              {projects.map((project, index) => {
                const isCompleted = project.status === "Completed";

                return (
                  <article
                    key={project.number}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                    className="group relative overflow-hidden rounded-lg border border-[#15140F]/15 bg-[#FCFBF8] shadow-sm transition-all duration-500 hover:border-[#B98B3E] hover:shadow-xl hover:shadow-[#B98B3E]/10"
                  >
                    <CornerMarks size="20" />

                    <div className="grid lg:grid-cols-[112px_1fr]">
                      {/* Number Bar */}
                      <div className="flex items-start justify-center border-b border-[#B98B3E]/20 bg-[#15140F] px-6 py-8 lg:border-b-0 lg:border-r lg:py-10">
                        <div className="text-center">
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B98B3E]">
                            CONTRACT
                          </span>
                          <p className="font-display mt-2 text-4xl font-extrabold text-white sm:text-5xl tracking-tighter">
                            {project.number}
                          </p>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="relative p-7 sm:p-9 lg:p-10">
                        {/* Logo Badge - own row, clear of everything else */}
                        <div className="mb-6 flex justify-end">
                          <div className="inline-flex items-center gap-3 rounded-full border border-[#B98B3E]/40 bg-white px-4 py-2 shadow-sm">
                            <img
                              src={logo}
                              alt="Pawanputra logo"
                              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                            />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A6A2E] sm:text-xs">
                              Pawanputra
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <span
                              className={`inline-flex items-center gap-2.5 border px-4 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider rounded-sm ${
                                isCompleted
                                  ? "border-emerald-700/30 bg-emerald-50 text-emerald-900"
                                  : "border-[#B98B3E]/30 bg-[#FFFBEB] text-[#8A6A2E]"
                              }`}
                            >
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  isCompleted ? "bg-emerald-700" : "bg-[#B98B3E]"
                                }`}
                              />
                              {project.status}
                            </span>

                            <p className="mt-3.5 font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6B665A]">
                              {project.category}
                            </p>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="font-mono text-[9px] font-semibold uppercase tracking-widest text-[#6B665A]">
                              FISCAL YEAR
                            </p>
                            <p className="font-mono mt-1.5 text-base font-medium text-[#15140F]">
                              {project.year}
                            </p>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="mt-8">
                          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#4A463D] sm:text-sm">
                            {project.company}
                          </p>
                          <h3 className="font-display mt-2.5 max-w-4xl text-2xl font-bold leading-snug text-[#15140F] sm:text-3xl tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Value Strip */}
                        <div className="mt-9 flex flex-col gap-5 border-t border-[#15140F]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B665A]">
                              PROJECT VALUE
                            </p>
                            <p className="font-mono mt-2 text-2xl font-bold tabular-nums text-[#8A6A2E] sm:text-3xl">
                              {project.value}
                            </p>
                          </div>

                          <div className="flex items-center gap-2.5 border border-[#B98B3E]/20 bg-[#FBF9F3] px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#6B665A] rounded-sm">
                            <svg className="h-4 w-4 text-[#B98B3E]/60" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" d="M8 0V16M0 8H16" /></svg>
                            Verified On-Record
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CAPABILITY SHOWCASE (Loader)
      ================================================== */}
      <section className="relative bg-[#0A0A09] py-20 sm:py-24 overflow-hidden border-y border-white/10">
        <BlueprintGrid className="opacity-45" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
            <div data-aos="fade-right">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#B98B3E]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A257]">
                  Heavy Field Capability
                </span>
              </div>

              <h2 className="font-display mt-5 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl tracking-tighter">
                Ready For
                <span className="block text-[#C9A257]"> Complex Site</span>
                Operations.
              </h2>

              <p className="mt-6 max-w-lg font-main text-base leading-8 text-white/70">
                Experienced site supervisors, technical support, and disciplined execution are the foundation of Pawanputra Enterprises. From excavation to heavy stone masonry, we are equipped for industrial requirements.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="relative overflow-hidden border border-white/15 shadow-2xl rounded-sm"
            >
              <CornerMarks tone="light" />
              <img
                src={loaderImage}
                alt="Heavy construction machinery operation"
                className="h-72 w-full object-cover opacity-95 transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-96"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C9A257]">
                    Heavy Machinery
                  </p>
                  <p className="font-display mt-2 text-xl font-semibold text-white tracking-tight">
                    On-Site Engineering Fleet
                  </p>
                </div>
                <div className="border border-[#B98B3E]/40 bg-black/60 px-4 py-2 font-mono text-[10px] font-bold text-[#C9A257] backdrop-blur-md rounded-sm">
                  SITE READY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CALL TO ACTION SECTION
      ================================================== */}
      <section className="bg-[#ECE7DA] py-20 sm:py-28 border-t border-[#B98B3E]/15">
        <div data-aos="zoom-in" className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#8A6A2E] font-bold">
            Execute Your Vision
          </span>

          <h2 className="font-display mt-5 text-4xl font-extrabold uppercase leading-tight text-[#15140F] sm:text-5xl lg:text-6xl tracking-tighter">
            Have A Critical
            <span className="block text-[#B98B3E]"> Project? Let's</span>
            Build.
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-main text-base leading-8 text-[#6B665A]">
            Discuss your specific engineering, mining civil, or infrastructure requirements with our expert team today.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-[#15140F] bg-[#15140F] px-10 py-4 font-mono text-xs font-bold uppercase tracking-widest text-[#C9A257] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B98B3E] hover:text-[#0A0A09] hover:shadow-2xl rounded-sm"
          >
            Discuss Requirements
            <span className="text-base font-normal">{"\u2192"}</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Project;