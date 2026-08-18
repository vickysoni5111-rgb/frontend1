import React, { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HardHat,
  Building2,
  Route,
  Mountain,
  Zap,
  Droplets,
  ShieldCheck,
  Factory,
  ClipboardCheck,
} from "lucide-react";

// ======================================================
// IMAGES
// ======================================================

import constructionSite from "../assets/constrctionsite.png";
import truckConstruction from "../assets/truckloadconstruction.png";
import sunsetConstruction from "../assets/sunsetpicconstrtcionsite.png";

import roadImage from "../assets/Roadandhighwayconstrctuctionpic.png";
import earthworkImage from "../assets/EarthworkExcavation.png";
import electricalImage from "../assets/eleetcricprojectconstrctionsite.png";
import waterImage from "../assets/watersupplysysteam.png";
import fireImage from "../assets/firefighting.png";
import industryImage from "../assets/industry.png";
import consultancyImage from "../assets/Projectconsultancy.png";

// ======================================================
// SERVICE DATA
// ======================================================

const services = [
  {
    number: "01",
    title: "Road & Highway Construction",
    description:
      "End-to-end development, surfacing and maintenance of national highways, state highways and industrial routes. Our approach focuses on proper site preparation, durable construction and reliable execution.",
    image: roadImage,
    icon: Route,
  },
  {
    number: "02",
    title: "Civil Construction",
    description:
      "Residential townships, commercial developments and industrial-grade building infrastructure delivered with careful planning, quality workmanship and professional execution from foundation to finishing.",
    image: constructionSite,
    icon: Building2,
  },
  {
    number: "03",
    title: "Earthwork & Excavation",
    description:
      "Precision site leveling, deep foundation excavation, mining earthwork and high-volume land development. We focus on efficient material movement, accurate levels and dependable site preparation.",
    image: earthworkImage,
    icon: Mountain,
  },
  {
    number: "04",
    title: "Electrical Projects",
    description:
      "High-voltage industrial electrification, substation setups, street lighting networks and smart cabling installations designed for dependable performance across demanding project environments.",
    image: electricalImage,
    icon: Zap,
  },
  {
    number: "05",
    title: "Water Supply Systems",
    description:
      "Cross-region pipeline deployments, local drainage networks, water reservoirs and civil plumbing systems planned to support efficient water distribution and long-term infrastructure performance.",
    image: waterImage,
    icon: Droplets,
  },
  {
    number: "06",
    title: "Fire Fighting Systems",
    description:
      "Design, high-pressure piping installation, automated testing and commissioning of safety protection networks for industrial and commercial environments.",
    image: fireImage,
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Industrial Infrastructure",
    description:
      "Heavy mining civil frameworks, factory structures, warehouse developments and batching installations executed with a strong focus on safety, durability and project requirements.",
    image: industryImage,
    icon: Factory,
  },
  {
    number: "08",
    title: "Project Consultancy",
    description:
      "Comprehensive blueprint design, architectural mapping, cost estimation and full-cycle project supervision helping clients move from initial concept to organized execution.",
    image: consultancyImage,
    icon: ClipboardCheck,
  },
];

// ======================================================
// SERVICE CARD
// ======================================================

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
    >
      {/* Image */}
      <div className="relative h-[245px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Very Light Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-black/60 backdrop-blur-md">
          <span className="text-xs font-black text-yellow-300">
            {service.number}
          </span>
        </div>

        {/* Icon */}
        <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-black/60 text-yellow-300 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
          <Icon size={21} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-7">
        {/* Yellow Line */}
        <div className="mb-5 h-1 w-9 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-16" />

        <h3 className="text-lg font-black leading-tight tracking-tight text-slate-900 sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
          {service.description}
        </p>

        {/* Active Service */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2">
            <CheckCircle2
              size={15}
              className="text-yellow-500"
              strokeWidth={2.5}
            />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
              Active Service
            </span>
          </div>

          <ArrowUpRight
            size={18}
            className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-500"
          />
        </div>
      </div>

      {/* Bottom Hover Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

// ======================================================
// SERVICE PAGE
// ======================================================

const Service = () => {
  useEffect(() => {
    // AOS optional support
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <main className="overflow-hidden bg-[#fafaf9] text-slate-900">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative isolate min-h-[620px] overflow-hidden bg-slate-950 sm:min-h-[680px]">

        {/* Main Image */}
        <img
          src={constructionSite}
          alt="Construction site"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Light Overlay - Image remains visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent" />

        {/* Decorative Glow */}
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-28 sm:min-h-[680px] sm:px-8 lg:px-10">

          <div
            data-aos="fade-right"
            className="max-w-3xl"
          >

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />

              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-yellow-300 sm:text-[10px]">
                Pawan Putra Enterprises
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building Strong.
              <br />

              <span className="text-yellow-400">
                Delivering Better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              From major roads and civil infrastructure to industrial,
              electrical and specialized development works, we provide
              dependable construction solutions built around quality,
              planning and execution.
            </p>

            {/* Hero Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-xs font-black text-black shadow-xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >
                Explore Services

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/15"
              >
                View Projects

                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>
        </div>

        {/* Hero Bottom Stats */}
        <div className="absolute bottom-5 left-0 right-0 hidden lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-end px-10">

            <div className="flex items-center gap-8 rounded-2xl border border-white/15 bg-black/40 px-6 py-4 backdrop-blur-md">

              <div>
                <p className="text-xl font-black text-yellow-400">13+</p>
                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-300">
                  Years Experience
                </p>
              </div>

              <div className="h-8 w-px bg-white/20" />

              <div>
                <p className="text-xl font-black text-yellow-400">100+</p>
                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-300">
                  Clients
                </p>
              </div>

              <div className="h-8 w-px bg-white/20" />

              <div>
                <p className="text-xl font-black text-yellow-400">150+</p>
                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-300">
                  Projects
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section
        id="services"
        className="relative bg-white py-20 sm:py-24 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div data-aos="fade-right">

              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                What We Do
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Our Core
                <br />
                <span className="text-yellow-500">
                  Services
                </span>
              </h2>

            </div>

            <div data-aos="fade-left">

              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                From design and site leveling to major highway development,
                heavy electrical setups and mine-site structures, our services
                cover the critical requirements of modern construction and
                infrastructure projects.
              </p>

            </div>

          </div>


          {/* Yellow Divider */}
          <div className="mt-10 h-px w-full bg-slate-200">
            <div className="h-px w-24 bg-yellow-400" />
          </div>


          {/* ==================================================
              SERVICE GRID
          ================================================== */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FEATURE / PROCESS SECTION
      ================================================== */}

      <section className="relative overflow-hidden bg-[#11110f] py-20 sm:py-24">

        {/* Background */}
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-yellow-300/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

            {/* Image */}
            <div
              data-aos="fade-right"
              className="group relative"
            >

              <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-[28px] border border-yellow-400/20 sm:block" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2">

                <div className="relative h-[380px] overflow-hidden rounded-[22px] sm:h-[500px]">

                  <img
                    src={truckConstruction}
                    alt="Heavy construction work"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-yellow-400">
                      Built For Performance
                    </span>

                    <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                      Equipment,
                      <br />
                      Experience & Execution.
                    </h3>

                  </div>

                </div>

              </div>

            </div>


            {/* Content */}
            <div data-aos="fade-left">

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-400">
                Our Approach
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Every Project
                <br />
                <span className="text-yellow-400">
                  Starts With Planning.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Successful construction is more than completing physical
                work. It requires proper planning, capable teams, suitable
                equipment and continuous attention to quality and safety.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Professional site planning and preparation",
                  "Experienced workforce and project coordination",
                  "Quality-focused construction and finishing",
                  "Reliable execution with attention to deadlines",
                ].map((item, index) => (

                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.04]"
                  >

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                      <CheckCircle2 size={16} />
                    </div>

                    <span className="text-xs font-semibold text-slate-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SECOND IMAGE STRIP
      ================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[30px]"
          >

            <img
              src={sunsetConstruction}
              alt="Construction project at sunset"
              className="h-[420px] w-full object-cover object-center sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-2xl px-6 sm:px-10 lg:px-14">

                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px]">
                  Quality • Trust • Excellence
                </span>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  Creating Infrastructure
                  <br />
                  That Lasts.
                </h2>

                <p className="mt-5 max-w-xl text-xs leading-6 text-slate-200 sm:text-sm sm:leading-7">
                  We combine practical engineering, professional execution
                  and a commitment to quality to create construction solutions
                  designed for long-term performance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          READY TO BUILD CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-yellow-400 py-16 sm:py-20">

        {/* Decorative Shapes */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-black/5" />

        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[50px] border-black/5" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* CTA Content */}
            <div data-aos="fade-right">

              <div className="mb-4 flex items-center gap-2">

                <HardHat
                  size={19}
                  strokeWidth={2.5}
                  className="text-black"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/60">
                  Ready To Build?
                </span>

              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                Have a Project
                <br className="sm:hidden" /> in Mind?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                Talk to our team about your construction, infrastructure or
                development requirement. Let us understand your project,
                requirements and vision and work towards the right solution.
              </p>

              {/* Mini Points */}
              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Professional Planning",
                  "Quality Execution",
                  "Reliable Solutions",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-black/65"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>


            {/* CTA Buttons */}
            <div
              data-aos="fade-left"
              className="flex flex-col gap-3 sm:flex-row lg:flex-col"
            >

              <a
                href="/contact"
                className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-xs font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
              >
                Discuss Your Project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/projects"
                className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl border-2 border-black/20 bg-transparent px-6 py-3 text-xs font-black text-black transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black/5"
              >
                View Our Projects

                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Service;