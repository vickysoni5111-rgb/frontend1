import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/logo.png";

// ======================================================
// SOCIAL ICONS
// ======================================================

const InstagramIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

// ======================================================
// SOCIAL LINKS
// ======================================================

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    Icon: InstagramIcon,
    hoverColor: "#E1306C",
  },
  {
    name: "Facebook",
    href: "#",
    Icon: FacebookIcon,
    hoverColor: "#1877F2",
  },
  {
    name: "YouTube",
    href: "#",
    Icon: YoutubeIcon,
    hoverColor: "#FF0000",
  },
];

// ======================================================
// CONTACT DATA
// ======================================================

const contactRows = [
  {
    key: "address",
    Icon: MapPin,
    label: "Headquarters Office",
    lines: [
      "Railmagra, District: Rajsamand",
      "Rajasthan — 313329",
    ],
    href:
      "https://maps.google.com/?q=Railmagra,+Rajsamand,+Rajasthan+313329",
  },

  {
    key: "phone1",
    Icon: Phone,
    label: "Direct Hotline",
    lines: ["+91 89469 55587"],
    href: "tel:+918946955587",
  },

  {
    key: "phone2",
    Icon: Phone,
    label: "Office Hotline",
    lines: ["+91 97823 80431"],
    href: "tel:+919782380431",
  },

  {
    key: "email",
    Icon: Mail,
    label: "Electronic Mail",
    lines: ["pawanputra53@gmail.com"],
    href: "mailto:pawanputra53@gmail.com",
  },
];

// ======================================================
// FOOTER
// ======================================================

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070707] text-white">

      {/* ==================================================
          BACKGROUND EFFECTS
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft yellow glow */}
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-yellow-500/[0.06] blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-amber-400/[0.05] blur-3xl" />

        {/* Subtle center glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.025] blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ==================================================
            TOP GOLD LINE
        ================================================== */}

        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

        {/* ==================================================
            MAIN FOOTER
        ================================================== */}

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.35fr_0.75fr_0.85fr_1.15fr] lg:gap-10">

          {/* ==================================================
              COMPANY
          ================================================== */}

          <div>

            {/* LOGO AREA */}

            <div className="flex items-center gap-4">

              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-white/[0.03] p-2 shadow-[0_0_30px_rgba(234,179,8,0.08)]">

                <img
                  src={logo}
                  alt="Pawan Putra Enterprises Logo"
                  className="h-full w-full object-contain"
                />

              </div>

              <div>

                <h2 className="text-[17px] font-black tracking-[0.08em] text-white sm:text-[19px]">
                  PAWAN PUTRA
                </h2>

                <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.34em] text-yellow-400">
                  ENTERPRISES
                </p>

              </div>

            </div>

            {/* COMPANY DESCRIPTION */}

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Building India's Future with{" "}
              <span className="font-semibold text-zinc-200">
                Quality, Integrity &amp; Innovation.
              </span>{" "}
              Over 13+ years of experience in heavy infrastructure,
              civil contracts, industrial projects and plant
              installations.
            </p>

            {/* BADGES */}

            <div className="mt-5 flex flex-wrap gap-2">

              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/[0.08] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-yellow-400">

                <ShieldCheck size={12} />

                Rajasthan Grade-A Contractor

              </span>

              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">

                Established 2012

              </span>

            </div>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-3">

              {socialLinks.map(
                ({ name, href, Icon, hoverColor }) => (

                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    style={{
                      "--hover-color": hoverColor,
                    }}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/10"
                  >

                    <span
                      className="transition-colors duration-300 group-hover:[color:var(--hover-color)]"
                    >
                      <Icon size={17} />
                    </span>

                  </a>

                )
              )}

            </div>

          </div>

          {/* ==================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-3.5">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  className="group flex w-fit items-center gap-2.5 text-sm text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                >

                  <span className="h-1 w-1 rounded-full bg-zinc-600 transition-all duration-300 group-hover:w-3 group-hover:bg-yellow-400" />

                  {name}

                </a>

              ))}

            </div>

          </div>

          {/* ==================================================
              SERVICES
          ================================================== */}

          <div>

            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white">
              Our Services
            </h3>

            <div className="mt-6 space-y-3.5">

              {[
                "Road & Highway Construction",
                "Civil Construction",
                "Earthwork & Excavation",
                "Electrical Projects",
                "Water Supply Systems",
                "Industrial Infrastructure",
              ].map((service) => (

                <a
                  key={service}
                  href="/services"
                  className="group flex w-fit items-start gap-2.5 text-sm leading-5 text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                >

                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600 transition-all duration-300 group-hover:w-3 group-hover:bg-yellow-400" />

                  {service}

                </a>

              ))}

            </div>

          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-3">

              {contactRows.map(
                ({
                  key,
                  Icon,
                  label,
                  lines,
                  href,
                }) => (

                  <a
                    key={key}
                    href={href}
                    target={
                      key === "address"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      key === "address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/[0.05]"
                  >

                    {/* ICON */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-500/10 bg-yellow-500/[0.08] text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">

                      <Icon size={16} />

                    </div>

                    {/* CONTENT */}

                    <div className="min-w-0">

                      <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-zinc-500">
                        {label}
                      </p>

                      {lines.map((line) => (

                        <p
                          key={line}
                          className="mt-1 break-words text-sm font-semibold leading-5 text-zinc-300 transition-colors group-hover:text-yellow-300"
                        >
                          {line}
                        </p>

                      ))}

                    </div>

                  </a>

                )
              )}

            </div>

          </div>

        </div>

        {/* ==================================================
            MINI CTA STRIP
        ================================================== */}

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-yellow-500/15 bg-gradient-to-r from-yellow-500/[0.07] via-white/[0.025] to-yellow-500/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

          <div>

            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-yellow-400">
              Ready To Build?
            </p>

            <p className="mt-1 text-sm font-semibold text-zinc-300">
              Let's discuss your next construction or infrastructure project.
            </p>

          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-xs font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
          >

            Get In Touch

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </a>

        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] leading-5 text-zinc-500 sm:text-xs">

            © 2026{" "}

            <span className="font-bold text-zinc-300">
              Pawan Putra Enterprises
            </span>

            . All Rights Reserved.

          </p>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold text-zinc-500 sm:text-xs">

            <a
              href="/privacy"
              className="transition-colors hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <a
              href="/terms"
              className="transition-colors hover:text-yellow-400"
            >
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;