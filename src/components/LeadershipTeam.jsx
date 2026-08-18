import React from "react";
import {
  Phone,
  Mail,
  ArrowUpRight,
  Crown,
  BriefcaseBusiness,
} from "lucide-react";

import shambhuImage from "../assets/SHAMBHU.png";
import nutanImage from "../assets/NUTAN.png";
import anilImage from "../assets/ANIL.png";

const LeadershipTeam = () => {
  const leaders = [
    {
      image: shambhuImage,
      name: "SHAMBHU PIPLA",
      role: "Founder & Owner",
      description:
        "Visionary entrepreneur with extensive experience in civil construction, infrastructure development, and large-scale project execution across Rajasthan.",
    },
    {
      image: nutanImage,
      name: "NUTAN SHARMA",
      role: "Director & Owner",
      description:
        "Responsible for strategic business planning, corporate governance, financial management, operations planning, and corporate growth initiatives.",
    },
    {
      image: anilImage,
      name: "ANIL SHARMA",
      role: "Chief Executive Officer",
      description:
        "Leading daily business operations, project oversight, client relations, resource optimization, and company development.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 sm:py-24 lg:py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div
          data-aos="fade-up"
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2">
            <Crown size={13} className="text-yellow-400" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-yellow-400">
              Leadership Team
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Management{" "}
            <span className="text-yellow-400">
              Team.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            The visionary entrepreneurs driving Pawanputra Enterprises
            toward a modern, quality-first future.
          </p>
        </div>

        {/* =====================================================
            LEADERSHIP CARDS
        ====================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#151515] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/40 hover:shadow-yellow-500/10"
            >

              {/* Yellow Top Line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:opacity-100" />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-[350px] overflow-hidden bg-zinc-900 sm:h-[380px]">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />

                {/* Role Badge */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-2 backdrop-blur-md">
                  <BriefcaseBusiness
                    size={13}
                    className="text-yellow-400"
                  />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white">
                    {leader.role}
                  </span>
                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative p-6 sm:p-7">

                <div className="mb-4 h-1 w-8 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-14" />

                <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  {leader.name}
                </h3>

                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-yellow-400">
                  {leader.role}
                </p>

                <p className="mt-4 text-xs leading-6 text-zinc-400">
                  {leader.description}
                </p>

                {/* Company */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Company
                    </p>

                    <p className="mt-1 text-xs font-bold text-zinc-200">
                      Pawanputra Enterprises
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* =====================================================
            CONTACT STRIP
        ====================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
        >

          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-yellow-400">
              Connect With Our Team
            </p>

            <p className="mt-1 text-xs text-zinc-400">
              For business enquiries and project discussions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">

            <a
              href="tel:+918946955587"
              className="flex items-center gap-2 text-xs font-bold text-zinc-200 transition-colors hover:text-yellow-400"
            >
              <Phone size={15} className="text-yellow-400" />
              +91 89469 55587
            </a>

            <a
              href="mailto:pawanputra53@gmail.com"
              className="flex items-center gap-2 text-xs font-bold text-zinc-200 transition-colors hover:text-yellow-400"
            >
              <Mail size={15} className="text-yellow-400" />
              pawanputra53@gmail.com
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;