import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ShieldCheck,
  FileCheck2,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom"; // Agar React Router use ho raha hai

import mainImage from "../assets/raman.png";
import constructionWorkerImage from "../assets/constructionworker.png";
import homeImage from "../assets/pic1.png";
import homeConstructionImage from "../assets/homeconstructionpic.png";

import EnquiryForm from "../components/EnquiryForm";

const Contact = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f1] text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#11110e]">
        <div className="relative h-[430px] w-full sm:h-[500px] lg:h-[570px]">
          <img
            src={mainImage}
            alt="Pawanputra Enterprises construction project"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="relative mx-auto flex h-full max-w-7xl items-end px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-black/30 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-yellow-300 sm:text-[10px]">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Contact
                <span className="text-yellow-400"> Pawanputra.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Contact our directors or submit an immediate online project
                bid request. Our team is ready to discuss your construction,
                infrastructure and development requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK CONTACT STRIP
      ====================================================== */}
      <section className="relative z-10 -mt-8 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="tel:+918946955587"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Direct Hotline
                </p>
                <p className="mt-1 text-sm font-black text-slate-800">
                  +91 89469 55587
                </p>
              </div>
            </div>
          </a>

          <a
            href="mailto:pawanputra53@gmail.com"
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Electronic Mail
                </p>
                <p className="mt-1 truncate text-sm font-black text-slate-800">
                  pawanputra53@gmail.com
                </p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-black/5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Registered Location
                </p>
                <p className="mt-1 text-sm font-black text-slate-800">
                  Railmagra, Rajsamand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE + IMAGE
      ====================================================== */}
      <section className="bg-[#f7f6f1] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border border-yellow-500/25 sm:-left-5 sm:-top-5" />
              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-2xl">
                <div className="relative h-[380px] overflow-hidden rounded-[21px] sm:h-[470px]">
                  <img
                    src={constructionWorkerImage}
                    alt="Construction workforce"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-yellow-300">
                      Pawanputra Enterprises
                    </span>
                    <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                      Strong Teams.
                      <br />
                      Reliable Execution.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#a47c00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d5a900]" />
                Office Information
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Let's Start a
                <span className="block text-[#b58a00]">
                  Conversation.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Whether you are planning a civil construction project,
                infrastructure development, industrial work or a specialized
                installation, our team is available to discuss your
                requirement.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                      Registered Location
                    </p>
                    <h3 className="mt-1 text-sm font-black text-slate-900">
                      Headquarters Office
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Railmagra, District: Rajsamand (Rajasthan),
                      Pin: 313329
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                      Direct Hotlines
                    </p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm font-black text-slate-800">
                      <a href="tel:+918946955587">+91 89469 55587</a>
                      <span className="text-slate-300">|</span>
                      <a href="tel:+919782380431">+91 97823 80431</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4c430]/15 text-[#b58a00]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                      Electronic Mail
                    </p>
                    <a
                      href="mailto:pawanputra53@gmail.com"
                      className="mt-1 block text-sm font-black text-slate-800"
                    >
                      pawanputra53@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLIANCE
      ====================================================== */}
      <section className="bg-[#11110e] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={homeImage}
                alt="Pawanputra construction"
                className="h-[360px] w-full object-cover object-center sm:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-yellow-300">
                  Built On Trust
                </p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Quality. Safety.
                  <br />
                  Commitment.
                </h2>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-yellow-400">
                GSTIN & Company Compliance
              </span>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                A Certified & 
                <span className="text-yellow-400"> Reliable Partner.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Pawanputra Enterprises operates with a professional approach
                towards project execution, compliance and industrial civil
                works.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <Building2 size={19} />
                  </div>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Firm Registration
                  </p>
                  <p className="mt-1 text-lg font-black text-white">Year 2012</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <MapPin size={19} />
                  </div>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    State / Location Code
                  </p>
                  <p className="mt-1 text-lg font-black text-white">Rajasthan (08)</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <FileCheck2 size={19} />
                  </div>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Tax Auditing Category
                  </p>
                  <p className="mt-1 text-sm font-black text-white">Industrial Civil Works</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <ShieldCheck size={19} />
                  </div>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Operational Capacity
                  </p>
                  <p className="mt-1 text-sm font-black text-white">Class-A Government Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE MAP
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#a47c00]">
                Find Our Office
              </span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Visit Us in
                <span className="text-[#b58a00]">Pawanputra.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Railmagra, District: Rajsamand (Rajasthan), Pin: 313329
              </p>
            </div>
          <a
  href="https://maps.app.goo.gl/1e8GB1RSAGFeA3Xj9?g_st=iw"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171714] px-5 py-3 text-xs font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b58a00]"
>
  Open Exact Location
  <Navigation size={15} />
</a>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-xl">
            <iframe
              title="Pawanputra Enterprises Office Location"
              src="https://www.google.com/maps?q=Railmagra%2C%20Rajsamand%2C%20Rajasthan%20313329&output=embed"
              className="h-[350px] w-full border-0 sm:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT IMAGE + ENQUIRY
      ====================================================== */}
      <section className="bg-[#f7f6f1] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[28px] bg-black">
              <img
                src={homeConstructionImage}
                alt="Construction project"
                className="h-[340px] w-full object-cover object-center sm:h-[430px]"
              />
            </div>

            <div>
              <div className="mb-7">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#a47c00]">
                  Project Enquiry
                </span>
                <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                  Have a Project
                  <span className="text-[#b58a00]"> in Mind?</span>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Share your project requirements with us. Our enquiry form
                  is ready to be connected with the backend.
                </p>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM STRIP
      ====================================================== */}
      <section className="bg-[#f4c430]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-black/60">
              Pawanputra Enterprises
            </p>
            <p className="mt-1 text-lg font-black text-[#11110e]">
              Building India's Future With Quality & Integrity.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#11110e] px-5 py-3 text-xs font-extrabold text-white"
          >
            View Our Projects
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;