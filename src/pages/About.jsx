import React, { useEffect, useRef, useState } from "react";
import LeadershipTeam from "../components/LeadershipTeam";
import ImageLightbox from "../components/ImageLightbox";

import {
  ArrowUpRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Users,
  Truck,
  Factory,
  HardHat,
  Zap,
  Route,
} from "lucide-react";

import truckloadImage from "../assets/truckloadconstruction.png";
import infrastructureImage from "../assets/sawanmachine.png";
import constructionImage from "../assets/homeconstructionpic.png";
import projectManagementImage from "../assets/projectmanagement.png";
import bestViewImage from "../assets/raman21.png";
import marbleImage from "../assets/marbal.png";

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
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const duration = 1500;
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
        }
      },
      { threshold: 0.25 }
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
// ABOUT PAGE
// ======================================================

const About = () => {
  const stats = [
    {
      value: 13,
      suffix: "+",
      title: "Years",
      description: "Solid Growth",
      icon: Building2,
    },
    {
      value: 100,
      suffix: "%",
      title: "Safety",
      description: "Quality Record",
      icon: ShieldCheck,
    },
    {
      value: 50,
      suffix: "+",
      title: "Heavy",
      description: "Machinery Fleet",
      icon: Truck,
    },
    {
      value: 100,
      suffix: "+",
      title: "Satisfied",
      description: "Client Organizations",
      icon: Users,
    },
  ];

  const clients = [
    "Hindustan Zinc Limited",
    "Larsen & Toubro (L&T)",
    "Siemens",
    "Bharat Construction Company",
    "SK Khetan Infraprojects",
    "Sanwariya Multiventures",
    "Aces Infradev Pvt Ltd",
    "Reliant Drilling Pvt Ltd",
    "SR Infra Projects",
  ];

  const capabilities = [
    {
      image: infrastructureImage,
      icon: Route,
      title: "Infrastructure Development",
      text:
        "Large-scale infrastructure development supported by modern machinery, experienced teams and disciplined site execution.",
    },
    {
      image: projectManagementImage,
      icon: Factory,
      title: "Industrial Projects",
      text:
        "Professional industrial project execution focused on safety, quality, coordination and dependable project timelines.",
    },
    {
      image: constructionImage,
      icon: HardHat,
      title: "Civil & Construction",
      text:
        "Strong civil construction solutions combining skilled manpower, modern equipment and quality-driven workmanship.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f7f6f1] text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[520px] overflow-hidden bg-[#090909] sm:min-h-[600px]">

        <img
          src={bestViewImage}
          alt="Pawanputra Enterprises construction site"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Soft overlay - image remains visible */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-24 sm:min-h-[600px] sm:px-8 lg:px-10">

          <div
            data-aos="fade-up"
            className="max-w-3xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/40 px-4 py-2 backdrop-blur-md">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-yellow-300 sm:text-[10px]">
                Established 2012
              </span>

            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Building Trust.

              <br />

              <span className="text-yellow-400">
                Delivering Excellence.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              A trusted name in Civil, Industrial, Electrical and
              Infrastructure Development, delivering solid engineering
              solutions across Rajasthan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xl font-black text-yellow-400">
                  13+
                </p>

                <p className="text-[8px] font-bold uppercase tracking-wider text-white/70">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xl font-black text-yellow-400">
                  100+
                </p>

                <p className="text-[8px] font-bold uppercase tracking-wider text-white/70">
                  Clients
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xl font-black text-yellow-400">
                  50+
                </p>

                <p className="text-[8px] font-bold uppercase tracking-wider text-white/70">
                  Machinery
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN ABOUT
      ====================================================== */}

      <section className="relative bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

            {/* IMAGE */}

            <div
              data-aos="fade-right"
              className="relative"
            >

              <div className="absolute -left-3 -top-3 h-full w-full rounded-[30px] border border-yellow-300 sm:-left-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-2xl shadow-black/10">

                <div className="group relative h-[400px] overflow-hidden rounded-[22px] bg-slate-100 sm:h-[540px]">

                  <img
                    src={truckloadImage}
                    alt="Pawanputra Enterprises construction work"
                    className="h-full w-full object-contain object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Very light overlay only at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/65 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-yellow-300">
                      Pawanputra Enterprises
                    </span>

                    <h3 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                      Building India's Future
                      <br />
                      With Strength & Precision.
                    </h3>

                  </div>

                </div>
              </div>


              {/* Floating Badge */}

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="absolute -bottom-5 -right-2 rounded-2xl border border-yellow-200 bg-white px-5 py-4 shadow-xl sm:-right-6"
              >

                <p className="text-2xl font-black text-slate-950">
                  2012
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />

                  <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                    Established
                  </p>

                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div data-aos="fade-left">

              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-yellow-600">

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />

                About Our Company

              </span>


              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

                13+ Years of Excellence in

                <span className="block text-yellow-600">
                  Construction & Infrastructure.
                </span>

              </h2>


              <div className="mt-6 space-y-4">

                <p className="text-sm leading-7 text-slate-600 sm:text-base">

                  Established in 2012 in Railmagra, Rajsamand
                  (Rajasthan),

                  <strong className="font-extrabold text-slate-950">
                    {" "}PAWANPUTRA ENTERPRISES
                  </strong>

                  {" "}has built a robust reputation as a reliable
                  and quality-driven contractor.

                </p>


                <p className="text-sm leading-7 text-slate-600 sm:text-base">

                  Over more than a decade, we have assembled
                  state-of-the-art machinery and a highly trained
                  workforce to execute heavy infrastructure,
                  earthworks, specialized electrical cabling and
                  pipeline works.

                </p>


                <p className="text-sm leading-7 text-slate-600 sm:text-base">

                  Our engineering versatility and rigid adherence
                  to project deadlines have earned us the trust of
                  India's biggest industrial giants, public sector
                  contracts and regional developers alike.

                </p>

              </div>


              {/* Highlights */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Experienced Engineering Team",
                  "Modern Heavy Machinery",
                  "Quality Driven Execution",
                  "Strong Safety Commitment",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-[#faf9f4] px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-50"
                  >

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 transition-all group-hover:bg-yellow-500 group-hover:text-black">

                      <CheckCircle2 size={16} />

                    </div>

                    <span className="text-xs font-bold text-slate-700 sm:text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
<LeadershipTeam />
      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f3f1e8] py-16 sm:py-20">

        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            data-aos="fade-up"
            className="mx-auto mb-10 max-w-2xl text-center"
          >

            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-yellow-700">
              Our Track Record
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Experience You Can
              <span className="text-yellow-600">
                {" "}Count On.
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-xl sm:p-7"
                >

                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-100/70 blur-2xl transition-all duration-500 group-hover:bg-yellow-200" />

                  <div className="relative">

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">

                      <Icon size={21} />

                    </div>

                    <div className="text-3xl font-black text-slate-950 sm:text-4xl">

                      <AnimatedNumber
                        value={item.value}
                        suffix={item.suffix}
                      />

                    </div>

                    <h3 className="mt-2 text-sm font-extrabold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-5 h-1 w-7 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-12" />

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            data-aos="fade-up"
            className="mx-auto mb-12 max-w-2xl text-center"
          >

            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-yellow-600">
              Our Capabilities
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">

              Built For
              <span className="text-yellow-600">
                {" "}Complex Projects.
              </span>

            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Our capabilities combine experienced people,
              modern machinery and disciplined project execution.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl"
                >

                  <div className="relative h-60 overflow-hidden bg-slate-100">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-lg">
                      <Icon size={20} />
                    </div>

                  </div>


                  <div className="p-6">

                    <h3 className="text-lg font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-yellow-600">
                        Pawanputra Engg.
                      </span>

                      <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        Active Capability
                      </span>

                    </div>

                    <div className="mt-5 h-1 w-8 rounded-full bg-yellow-500 transition-all duration-500 group-hover:w-16" />

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUSTED CLIENTS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-24">

        <img
          src={marbleImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            data-aos="fade-up"
            className="mb-12 max-w-2xl"
          >

            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-yellow-400">
              Trusted Partnerships
            </span>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">

              Successfully Executed
              <span className="text-yellow-400">
                {" "}Projects For.
              </span>

            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Our professional approach and dependable execution
              have helped us build relationships with leading
              industrial and infrastructure organizations.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {clients.map((client, index) => (

              <div
                key={client}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 80}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/10"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 transition-all group-hover:bg-yellow-400 group-hover:text-black">

                  <CheckCircle2 size={16} />

                </div>

                <span className="text-xs font-bold text-slate-300 transition-colors group-hover:text-white">
                  {client}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f3f1e8] py-16 sm:py-20">

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />

        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-yellow-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

          <div data-aos="fade-up">

            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-yellow-700">

              <Zap size={12} />

              Let's Build Together

            </span>


            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

              Strong Foundations.

              <span className="block text-yellow-600">
                Better Futures.
              </span>

            </h2>


            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              From infrastructure to industrial development,
              we bring experience, quality and dependable
              execution to every project.
            </p>


            <a
              href="/projects"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-extrabold text-yellow-400 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
            >

              Explore Our Projects

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;