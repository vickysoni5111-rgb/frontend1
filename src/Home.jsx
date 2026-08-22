import React, { useEffect, useState } from "react";
import TrustStats from "./components/TrustStats";
import AOS from "aos";
import { Link } from "react-router-dom";

import FinalCTA from "./components/FinalCTA";
import ProjectCard from "./components/ProjectCard";
import SlidingCard from "./components/SlidingCard"; 
import "aos/dist/aos.css";

// ======================================================
// HERO IMAGES
// ======================================================

import constructionImage from "./assets/raman21.png";
import infrastructureImage from "./assets/infrstructure.png";
import bestInfrastructureGarden from "./assets/bestinfrasturegarden.png";

// ======================================================
// PROJECT IMAGES
// ======================================================

import truckSupplyImage from "./assets/trucksupplypic.png";
import machineSupplyImage from "./assets/sawanmachinesupplypic.png";
import roadConstructionImage from "./assets/Roadandhighwayconstrctuctionpic.png";
import homeConstructionImage from "./assets/homeconstructpic.png";
import civilEngineerImage from "./assets/civilengineerconstructlookingview.png";
import constructionSiteImage from "./assets/constrctionsite.png";

// ======================================================
// HOME
// ======================================================

const Home = () => {
  // ====================================================
  // AOS
  // ====================================================

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", refreshAOS);

    return () => {
      window.removeEventListener("resize", refreshAOS);
    };
  }, []);

  // ====================================================
  // HERO SLIDES
  // ====================================================

  const heroSlides = [
    {
      image: constructionImage,
      eyebrow: "CONSTRUCTION SOLUTIONS",
      title: "Building Quality",
      highlight: "With Trust.",
      description:
        "Professional construction solutions delivered with careful planning, quality workmanship and a strong commitment to every project.",
    },

    {
      image: infrastructureImage,
      eyebrow: "INFRASTRUCTURE DEVELOPMENT",
      title: "Strong Foundations",
      highlight: "Better Futures.",
      description:
        "Reliable infrastructure development focused on durability, performance and long-term value for every space we help create.",
    },

    {
      image: bestInfrastructureGarden,
      eyebrow: "DESIGN & DEVELOPMENT",
      title: "Creating Spaces",
      highlight: "That Inspire.",
      description:
        "From outdoor environments to complete development solutions, we bring practical planning and thoughtful execution together.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ====================================================
  // HERO AUTO SLIDER
  // ====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ====================================================
  // PROJECT DATA
  // ====================================================

  const projects = [
    {
      number: "01",
      image: truckSupplyImage,
      category: "Supply Management",
      title: "Heavy Material & Truck Supply",
      description:
        "Reliable transportation and supply support for construction sites with timely material movement.",
      location: "Rajasthan",
      type: "Supply & Logistics",
    },

    {
      number: "02",
      image: machineSupplyImage,
      category: "Heavy Machinery",
      title: "Construction Machinery Supply",
      description:
        "Heavy machinery deployment and equipment support for efficient, productive site operations.",
      location: "Rajasthan",
      type: "Machinery Supply",
    },

    {
      number: "03",
      image: roadConstructionImage,
      category: "Road & Highway",
      title: "Road & Highway Construction",
      description:
        "Durable infrastructure development with systematic execution and dependable performance.",
      location: "Rajasthan",
      type: "Infrastructure",
    },

    {
      number: "04",
      image: homeConstructionImage,
      category: "Home Construction",
      title: "Residential Construction",
      description:
        "Quality residential construction combining practical planning and professional finishing.",
      location: "Rajasthan",
      type: "Residential",
    },

    {
      number: "05",
      image: civilEngineerImage,
      category: "Civil Engineering",
      title: "Civil Engineering & Site Development",
      description:
        "Experienced civil engineering supported by careful planning and disciplined execution.",
      location: "Rajasthan",
      type: "Civil Works",
    },

    {
      number: "06",
      image: constructionSiteImage,
      category: "Site Development",
      title: "Construction Site Development",
      description:
        "End-to-end site preparation and development with safe, well-managed on-ground execution.",
      location: "Rajasthan",
      type: "Site Execution",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#faf9f4] text-slate-900">
      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="relative min-h-[620px] overflow-hidden bg-[#090909] pt-[74px]"
      >
        {/* HERO IMAGES */}

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
          </div>
        ))}

        {/* HERO CONTENT */}

        <div className="relative z-20 mx-auto flex min-h-[546px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            {/* EYEBROW */}

            <div
              data-aos="fade-down"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />

              <span className="text-[9px] font-black tracking-[0.24em] text-yellow-300">
                {heroSlides[currentSlide].eyebrow}
              </span>
            </div>

            {/* HEADING */}

            <h1
              key={currentSlide}
              data-aos="fade-up"
              className="text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[58px]"
            >
              {heroSlides[currentSlide].title}
              <br />
              <span className="text-yellow-400">
                {heroSlides[currentSlide].highlight}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              key={`description-${currentSlide}`}
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-5 max-w-xl text-sm leading-6 text-white/75"
            >
              {heroSlides[currentSlide].description}
            </p>

            {/* BUTTONS */}

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="rounded-xl bg-yellow-400 px-6 py-3 text-center text-xs font-black text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >
                Explore Our Projects →
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Discuss Your Project
              </a>
            </div>

            {/* SLIDER DOTS */}

            <div className="mt-8 flex items-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-12 bg-yellow-400"
                      : "w-6 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* HERO BOTTOM STATS */}

        <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/10 bg-black/30 backdrop-blur-md lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-3">
            <div className="border-r border-white/10 px-8 py-4">
              <p className="text-lg font-black text-yellow-400">13+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                Years Experience
              </p>
            </div>

            <div className="border-r border-white/10 px-8 py-4">
              <p className="text-lg font-black text-yellow-400">100+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                Client Organizations
              </p>
            </div>

            <div className="px-8 py-4">
              <p className="text-lg font-black text-yellow-400">50+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                Heavy Machinery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          TRUST STATS
      ================================================== */}

      <TrustStats />
      <SlidingCard/>

      {/* ==================================================
          COMPANY INTRO
      ================================================== */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          {/* CONTENT */}

          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-yellow-600">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              Pawanputra Enterprises
            </span>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Building Better.
              <span className="block text-yellow-600">
                Building Together.
              </span>
            </h2>

            <div className="mt-4 h-1 w-12 rounded-full bg-yellow-500" />

            <p className="mt-5 text-sm leading-6 text-slate-600">
              We believe every successful project starts with a clear
              vision, responsible planning and quality execution. Our team
              works closely with clients to transform ideas into
              dependable, practical spaces.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              From construction and infrastructure development to supply
              management, heavy machinery and civil engineering, we focus
              on delivering work with functionality and durability.
            </p>

         <Link
  to="/about"
  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-xs font-black text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
>
  Discover More
  <span>→</span>
</Link>
          </div>

          {/* IMAGE */}

          <div data-aos="fade-left" className="relative">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl bg-yellow-100" />

            <div className="relative overflow-hidden rounded-2xl border-8 border-white bg-slate-100 shadow-xl">
              <img
                src={constructionImage}
                alt="Pawanputra construction project"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[360px]"
              />
            </div>

            {/* EXPERIENCE BADGE */}

            <div className="absolute -bottom-4 -right-3 rounded-xl border border-yellow-200 bg-slate-950 px-5 py-4 text-white shadow-xl">
              <p className="text-xl font-black text-yellow-400">13+</p>
              <p className="text-[8px] font-bold uppercase tracking-wider text-white/60">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          OUR EXPERIENCE
      ================================================== */}

      <section className="relative overflow-hidden bg-[#f3f1e8] py-16 sm:py-20">
        {/* BACKGROUND GLOW */}

        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* HEADING */}

          <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-yellow-600">
              Our Experience
            </span>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Experience That
              <span className="text-yellow-600"> Makes a Difference.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Over the years, we have built our work around quality,
              reliability and long-term relationships.
            </p>
          </div>

          {/* EXPERIENCE CARDS */}

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              {
                number: "01",
                value: "10+",
                title: "Years Experience",
                text: "Industry Experience",
              },
              {
                number: "02",
                value: "150+",
                title: "Projects",
                text: "Successfully Delivered",
              },
              {
                number: "03",
                value: "50+",
                title: "Happy Clients",
                text: "Built On Trust",
              },
              {
                number: "04",
                value: "100%",
                title: "Commitment",
                text: "Quality Focused",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg sm:p-5"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-yellow-100/60 blur-2xl transition-all duration-300 group-hover:bg-yellow-200" />

                <div className="relative">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-[10px] font-black text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                    {item.number}
                  </div>

                  <p className="text-2xl font-black text-slate-950 sm:text-3xl">
                    {item.value}
                  </p>

                  <h3 className="mt-1.5 text-xs font-black text-slate-800 sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.text}
                  </p>

                  <div className="mt-3 h-1 w-6 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-11" />
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM LINE */}

          <div
            data-aos="fade-up"
            className="mx-auto mt-8 flex max-w-3xl items-center gap-4"
          >
            <span className="h-px flex-1 bg-slate-300" />

            <p className="text-center text-xs font-bold leading-5 text-slate-600">
              Quality workmanship, professional execution and commitment to
              every project.
            </p>

            <span className="h-px flex-1 bg-slate-300" />
          </div>
        </div>
      </section>

      {/* ==================================================
          PROJECT SHOWCASE
      ================================================== */}

      <section
        id="projects"
        className="relative overflow-hidden bg-white py-16 sm:py-20"
      >
        {/* DECORATION */}

        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* SECTION HEADING */}

          <div
            data-aos="fade-up"
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-yellow-600">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              Our Projects
            </span>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Work That Speaks
              <span className="text-yellow-600"> For Itself.</span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Explore selected construction, infrastructure, machinery
              supply and civil engineering projects.
            </p>
          </div>

          {/* PROJECT CARDS */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.number}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 80}
              >
                <ProjectCard
                  number={project.number}
                  image={project.image}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  type={project.type}
                />
              </div>
            ))}
          </div>

          {/* GALLERY BUTTON */}

          <div data-aos="fade-up" className="mt-10 flex justify-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-xs font-black text-yellow-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
            >
              View Complete Gallery
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY CHOOSE US
      ================================================== */}

      <section className="bg-[#f3f1e8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-yellow-600">
              Why Pawanputra
            </span>

            <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl lg:text-4xl">
              Built Around
              <span className="text-yellow-600"> Reliability.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Practical solutions, dependable execution and a professional
              approach at every stage of the project.
            </p>
          </div>

          {/* WHY CARDS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Quality Execution",
                text: "Professional execution with attention to every project detail.",
              },
              {
                number: "02",
                title: "Modern Machinery",
                text: "Strong equipment capability for demanding site requirements.",
              },
              {
                number: "03",
                title: "Supply Management",
                text: "Dependable material movement and project logistics support.",
              },
              {
                number: "04",
                title: "Experienced Team",
                text: "Skilled people focused on safe and efficient project delivery.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg"
              >
                <span className="text-xs font-black text-yellow-600">
                  {item.number}
                </span>

                <h3 className="mt-3 text-base font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-4 h-1 w-6 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-11" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <FinalCTA />
    </main>
  );
};

export default Home;