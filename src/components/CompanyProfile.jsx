import React from "react";
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  HardHat,
  ShieldCheck,
  Users,
  Zap,
  Route,
  Mountain,
} from "lucide-react";

import mainpic1 from "../assets/mainpic1.png";
import raman1 from "../assets/raman1.png";
import work from "../assets/work.png";
import nutan from "../assets/NUTAN.png";

const CompanyProfile = () => {
  return (
    <main className="w-full bg-white text-[#171717]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative bg-[#101010] overflow-hidden">

        {/* subtle background decoration */}
        <div className="absolute right-0 top-0 w-[45%] h-full bg-gradient-to-l from-[#c79a21]/[0.06] to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[42%_58%] min-h-[650px]">

          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[2px] bg-[#d4a52c]" />

              <span className="text-[#d4a52c] text-[10px] font-bold uppercase tracking-[4px]">
                Company Profile
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[52px] xl:text-[64px] leading-[0.98] tracking-[-2px] font-extrabold text-white">
              Building
              <br />
              <span className="text-[#d4a52c]">stronger</span>
              <br />
              foundations.
            </h1>

            <p className="mt-8 max-w-[520px] text-[14px] sm:text-[15px] leading-7 text-neutral-400">
              Pawanputra Enterprises is a trusted infrastructure and
              construction company delivering reliable solutions across
              <strong className="text-white">
                {" "}Civil, Industrial, Road, Mining and Electrical
                Construction.
              </strong>
            </p>

            <div className="mt-8 h-px w-full max-w-[500px] bg-white/10" />

            {/* Stats */}
            <div className="grid grid-cols-3 max-w-[500px] mt-7">

              <Stat number="13+" label="Years Experience" />

              <Stat
                number="04"
                label="Core Sectors"
                border
              />

              <Stat
                number="100%"
                label="Commitment"
                border
              />

            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="relative min-h-[440px] lg:min-h-full">

            <img
              src={mainpic1}
              alt="Pawanputra Enterprises construction project"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* darker left blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/70 via-transparent to-transparent" />

            {/* bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* image label */}
            <div className="absolute bottom-8 left-6 sm:left-10 lg:left-12">

              <div className="inline-flex items-center gap-2 bg-[#d4a52c] text-black px-4 py-2 rounded-full mb-4">
                <HardHat size={14} />
                <span className="text-[9px] font-extrabold uppercase tracking-wider">
                  Excellence in Execution
                </span>
              </div>

              <h2 className="text-white text-2xl sm:text-3xl font-extrabold">
                Built to perform.
              </h2>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="bg-white">

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">

          <div className="grid lg:grid-cols-[1fr_440px] gap-14 xl:gap-20 items-center">

            {/* CONTENT */}
            <div>

              <SectionLabel text="About The Company" />

              <h2 className="mt-5 text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-1.5px] font-extrabold">
                Experience that
                <br />
                <span className="text-[#c99b22]">
                  delivers results.
                </span>
              </h2>

              <div className="mt-7 max-w-[680px] space-y-5 text-[14px] sm:text-[15px] leading-7 text-neutral-600">

                <p>
                  Pawanputra Enterprises is a professionally managed
                  infrastructure and construction firm catering to Government
                  Departments, Mining Corporations, Industries and Private
                  Clients.
                </p>

                <p>
                  Our core capabilities encompass complex civil works,
                  industrial infrastructure, road networks, mining site
                  development and heavy electrical installations.
                </p>

                <p>
                  By combining engineering expertise, modern machinery and
                  skilled manpower, we execute challenging assignments safely,
                  efficiently and on schedule.
                </p>

              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-9 max-w-[650px]">

                <Highlight text="Quality Driven Execution" />
                <Highlight text="Safety First Approach" />
                <Highlight text="Timely Project Delivery" />
                <Highlight text="Experienced Professionals" />

              </div>
            </div>


            {/* IMAGE COLLAGE */}
            <div className="relative h-[470px]">

              {/* Main image */}
              <div className="absolute left-0 top-0 w-[68%] h-[390px] overflow-hidden">
                <img
                  src={raman1}
                  alt="Pawanputra Enterprises team"
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-sm font-bold">
                    Experienced Team
                  </p>
                  <p className="text-white/60 text-[10px] mt-1">
                    Technical expertise & professionalism
                  </p>
                </div>
              </div>


              {/* Second image */}
              <div className="absolute right-0 bottom-0 w-[53%] h-[315px] border-[8px] border-white overflow-hidden shadow-2xl">
                <img
                  src={work}
                  alt="Construction work"
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-sm font-bold">
                    Our Work
                  </p>
                  <p className="text-white/60 text-[10px] mt-1">
                    Precision in every detail
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          DIRECTOR
      ========================================================= */}
      <section className="bg-[#111111] overflow-hidden">

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-24">

          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-center">

            {/* DIRECTOR PHOTO */}
            <div className="relative">

              {/* gold offset frame */}
              <div className="absolute -left-3 -bottom-3 w-full h-full border border-[#d4a52c]/50" />

              <div className="relative h-[430px] sm:h-[480px] overflow-hidden bg-[#ddd]">

                <img
                  src={nutan}
                  alt="Nutan Sharma - Director and Owner"
                  className="w-full h-full object-cover object-top"
                />

              </div>

            </div>


            {/* DIRECTOR DETAILS */}
            <div>

              <SectionLabel
                text="Leadership"
                dark
              />

              <h2 className="mt-5 text-[40px] sm:text-[52px] lg:text-[62px] leading-none tracking-[-2px] font-extrabold text-white">
                NUTAN SHARMA
              </h2>

              <p className="mt-3 text-[#d4a52c] font-bold text-base">
                Director & Owner
              </p>

              <div className="w-16 h-[2px] bg-[#d4a52c] mt-7 mb-7" />

              <p className="max-w-[650px] text-neutral-400 text-[14px] sm:text-[15px] leading-7">
                Responsible for strategic business planning, corporate
                governance, financial management, operations planning, and
                corporate growth initiatives.
              </p>

              <p className="max-w-[650px] text-neutral-500 text-sm leading-6 mt-5">
                Guiding the organisation's vision with a focus on sustainable
                growth, operational excellence and long-term infrastructure
                development.
              </p>

              {/* role info */}
              <div className="flex flex-wrap gap-3 mt-8">

                <div className="border border-white/10 px-5 py-3">
                  <p className="text-[9px] text-neutral-500 uppercase tracking-wider">
                    Company
                  </p>
                  <p className="text-white text-xs font-bold mt-1">
                    Pawanputra Enterprises
                  </p>
                </div>

                <div className="border border-white/10 px-5 py-3">
                  <p className="text-[9px] text-neutral-500 uppercase tracking-wider">
                    Position
                  </p>
                  <p className="text-white text-xs font-bold mt-1">
                    Director & Owner
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section className="bg-[#f5f4ef]">

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-20">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">

            <div>
              <SectionLabel text="Our Expertise" />

              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
                What We Do
              </h2>
            </div>

            <p className="max-w-[420px] text-sm text-neutral-500 leading-6">
              Comprehensive construction and infrastructure solutions backed
              by engineering expertise and professional project management.
            </p>

          </div>


          <div className="grid grid-cols-2 lg:grid-cols-4 border border-black/10 bg-white">

            <Service
              number="01"
              icon={<Building2 size={21} />}
              title="Industrial"
              subtitle="Construction"
            />

            <Service
              number="02"
              icon={<Route size={21} />}
              title="Road"
              subtitle="Construction"
            />

            <Service
              number="03"
              icon={<Mountain size={21} />}
              title="Mining"
              subtitle="Infrastructure"
            />

            <Service
              number="04"
              icon={<Zap size={21} />}
              title="Electrical"
              subtitle="Works"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-white border-t border-black/10">

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-12">

          <div className="grid md:grid-cols-3">

            <Value
              icon={<ShieldCheck size={21} />}
              title="Quality & Safety"
              text="Highest standards of quality and safety in every project."
            />

            <Value
              icon={<Users size={21} />}
              title="Business Integrity"
              text="Transparent, ethical and dependable corporate practices."
            />

            <Value
              icon={<Award size={21} />}
              title="Committed Excellence"
              text="Reliable solutions focused on long-term project success."
            />

          </div>

        </div>
      </section>

    </main>
  );
};


/* =========================================================
   SMALL COMPONENTS
========================================================= */

const Stat = ({ number, label, border }) => (
  <div
    className={`px-4 ${
      border ? "border-l border-white/10" : ""
    }`}
  >
    <p className="text-[#d4a52c] text-2xl sm:text-3xl font-extrabold">
      {number}
    </p>

    <p className="mt-1 text-[9px] uppercase tracking-wider text-neutral-500">
      {label}
    </p>
  </div>
);


const SectionLabel = ({ text, dark = false }) => (
  <div className="flex items-center gap-3">

    <span className="w-9 h-[2px] bg-[#d4a52c]" />

    <span
      className={`text-[9px] font-bold uppercase tracking-[3px] ${
        dark ? "text-[#d4a52c]" : "text-[#a47b16]"
      }`}
    >
      {text}
    </span>

  </div>
);


const Highlight = ({ text }) => (
  <div className="flex items-center gap-3">

    <CheckCircle2
      size={17}
      className="text-[#c49722] shrink-0"
    />

    <span className="text-sm font-semibold text-neutral-800">
      {text}
    </span>

  </div>
);


const Service = ({ number, icon, title, subtitle }) => (
  <div className="group relative p-6 sm:p-8 border-r border-b lg:border-b-0 border-black/10 last:border-r-0 hover:bg-[#111111] transition-all duration-300">

    <div className="flex justify-between items-start">

      <div className="w-11 h-11 flex items-center justify-center bg-[#d4a52c] text-black">
        {icon}
      </div>

      <span className="text-[10px] text-neutral-300 font-bold group-hover:text-neutral-600">
        {number}
      </span>

    </div>

    <h3 className="mt-10 text-lg font-extrabold group-hover:text-white">
      {title}
    </h3>

    <p className="text-[#b58a1c] text-[10px] font-bold uppercase tracking-wider mt-1">
      {subtitle}
    </p>

    <ArrowUpRight
      size={17}
      className="mt-8 text-neutral-300 group-hover:text-[#d4a52c]"
    />

  </div>
);


const Value = ({ icon, title, text }) => (
  <div className="px-6 py-4 md:border-r md:border-black/10 last:border-r-0">

    <div className="flex items-center gap-3">

      <div className="w-10 h-10 bg-[#111111] text-[#d4a52c] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xs font-extrabold uppercase tracking-wider">
        {title}
      </h3>

    </div>

    <p className="text-xs text-neutral-500 leading-5 mt-3 pl-[52px]">
      {text}
    </p>

  </div>
);


export default CompanyProfile;