import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Eye,
  Factory,
  HardHat,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
  Waves,
  X,
} from "lucide-react";

import gallaryMainImage from "../assets/gallarmainpic.png";
import boundaryImage from "../assets/projectboundery.png";
import premiumComplexImage from "../assets/premiumcomplex.png";
import integratedComplexImage from "../assets/integratedcomplex.png";
import balajiComplexImage from "../assets/balajicomplex.png";
import waterComplexImage from "../assets/watercomplex.png";
import batchingPlantImage from "../assets/batchingplant.png";
import featuredWorkImage from "../assets/workbuildhome.png";

const Gallery = () => {
  // =====================================================
  // IMAGE POPUP STATE
  // =====================================================

  const [selectedImage, setSelectedImage] = useState(null);

  // =====================================================
  // ESC KEY TO CLOSE POPUP
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);

      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // =====================================================
  // GALLERY DATA
  // =====================================================

  const galleryItems = [
    {
      number: "01",
      row: "ROW I",
      category: "Civil Construction",
      title: "Project Boundary & Compliance Wall",
      description:
        "A professionally executed boundary wall setup designed for site security, controlled access and clear project compliance. The installation includes durable wall construction, barbed-wire protection and prominent safety and site-information boards.",
      image: boundaryImage,
      icon: ShieldCheck,
    },

    {
      number: "02",
      row: "ROW I",
      category: "Residential Development",
      title: "Premium Residential Duplex Villas",
      description:
        "A modern residential development featuring carefully planned two-storey duplex homes with attractive facades, balanced proportions and practical internal movement. The project reflects our focus on durable construction and clean finishing.",
      image: premiumComplexImage,
      icon: Building2,
    },

    {
      number: "03",
      row: "ROW I",
      category: "Site Planning",
      title: "Integrated Township Land Plotting",
      description:
        "A large-scale site development view showing planned land parcels, internal road networks and systematic site-leveling work. Every section is arranged to support efficient movement, future construction and organized township development.",
      image: integratedComplexImage,
      icon: MapPin,
    },

    {
      number: "04",
      row: "ROW II",
      category: "Civil Infrastructure",
      title: "Shree Panchamukhi Balaji Temple",
      description:
        "A beautifully developed spiritual structure created within the project environment. The temple adds a dedicated community space while demonstrating attention to civil construction, finishing details and site development.",
      image: balajiComplexImage,
      icon: HardHat,
    },

    {
      number: "05",
      row: "ROW II",
      category: "Water Supply",
      title: "Civic Water Reservoir Tank",
      description:
        "A large concrete water-reservoir development designed to support reliable water storage and distribution. The structure combines reinforced civil construction with practical site planning for long-term utility.",
      image: waterComplexImage,
      icon: Waves,
    },

    {
      number: "06",
      row: "ROW II",
      category: "Heavy Industrial Assets",
      title: "Heavy Batching Plant & Silo",
      description:
        "An industrial batching facility supporting high-volume concrete production and project execution. The installation demonstrates our capability in handling heavy equipment layouts, industrial structures and demanding site environments.",
      image: batchingPlantImage,
      icon: Factory,
    },
  ];

  // =====================================================
  // OPEN IMAGE
  // =====================================================

  const openImage = (image, title) => {
    setSelectedImage({
      image,
      title,
    });
  };

  // =====================================================
  // CLOSE IMAGE
  // =====================================================

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <main className="overflow-hidden bg-[#faf9f5] text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#11110f] sm:min-h-[680px] lg:min-h-[720px]">

        {/* Main Gallery Image */}

        <img
          src={gallaryMainImage}
          alt="Pawanputra Enterprises construction project"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Yellow Accent */}

        <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400 sm:w-1.5" />

        {/* Hero Content */}

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-28 sm:min-h-[680px] sm:px-8 lg:min-h-[720px] lg:px-10">

          <div className="max-w-3xl">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 backdrop-blur-md">

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-black">
                <Sparkles size={11} />
              </span>

              <span className="text-[9px] font-black uppercase tracking-[0.28em] text-yellow-300 sm:text-[10px]">
                Project Visuals
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[70px]">

              Pawanputra

              <span className="block text-yellow-400">
                Project Gallery.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">

              A visual walk-through of our actual construction sites,
              infrastructure development, heavy equipment layouts and
              completed residential and industrial works.

            </p>

            {/* Hero Highlights */}

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">

                <HardHat size={15} className="text-yellow-400" />

                <span className="text-[10px] font-bold text-white sm:text-xs">
                  Civil Construction
                </span>

              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">

                <Truck size={15} className="text-yellow-400" />

                <span className="text-[10px] font-bold text-white sm:text-xs">
                  Heavy Infrastructure
                </span>

              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">

                <Factory size={15} className="text-yellow-400" />

                <span className="text-[10px] font-bold text-white sm:text-xs">
                  Industrial Works
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/10 bg-black/30 backdrop-blur-md lg:block">

          <div className="mx-auto grid max-w-7xl grid-cols-3">

            <div className="border-r border-white/10 px-10 py-5">

              <p className="text-xl font-black text-yellow-400">
                06+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                Featured Visuals
              </p>

            </div>

            <div className="border-r border-white/10 px-10 py-5">

              <p className="text-xl font-black text-yellow-400">
                13+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                Years Experience
              </p>

            </div>

            <div className="px-10 py-5">

              <p className="text-xl font-black text-yellow-400">
                Rajasthan
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                Project Operations
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-yellow-600">

                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />

                Our Work

              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

                Quality That Speaks

                <span className="block text-yellow-500">
                  For Itself.
                </span>

              </h2>

            </div>


            {/* RIGHT */}

            <div>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">

                Explore a selection of project environments developed
                through professional planning, disciplined execution and
                practical engineering solutions.

              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">

                From residential development and civil infrastructure to
                water systems and heavy industrial assets, each visual
                represents the kind of work and site capability that
                defines Pawanputra Enterprises.

              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Professional Planning",
                  "Quality Execution",
                  "Reliable Results",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-[#faf9f5] px-3 py-2"
                  >

                    <CheckCircle2
                      size={14}
                      className="text-yellow-600"
                    />

                    <span className="text-[10px] font-bold text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="bg-[#f5f3ed] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-600">
                Project Collection
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">

                Inside Our

                <span className="text-yellow-500">
                  {" "}Projects.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-xs leading-6 text-slate-500 sm:text-sm">

              Real project environments showing our approach to
              construction, site development, infrastructure and
              industrial execution.

            </p>

          </div>


          {/* Gallery Cards */}

          <div className="grid gap-7 md:grid-cols-2">

            {galleryItems.map((item) => {

              const Icon = item.icon;

              return (

                <article
                  key={item.number}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-2xl"
                >

                  {/* =================================================
                      IMAGE / CLICKABLE PROJECT VISUAL
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() =>
                      openImage(item.image, item.title)
                    }
                    className="group relative block h-[290px] w-full cursor-zoom-in overflow-hidden bg-slate-200 text-left sm:h-[340px]"
                    aria-label={`View full image of ${item.title}`}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />


                    {/* Gallery Index */}

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/20 bg-black/55 px-3 py-2 backdrop-blur-md">

                      <span className="text-[9px] font-black tracking-wider text-yellow-400">
                        GALLERY INDEX
                      </span>

                      <span className="text-xs font-black text-white">
                        #{item.number}
                      </span>

                    </div>


                    {/* Category */}

                    <div className="absolute bottom-5 left-5">

                      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black shadow-lg">

                        <Icon size={12} />

                        {item.category}

                      </span>

                    </div>


                    {/* View Full Image */}

                    <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl border border-white/20 bg-black/65 px-3 py-2 backdrop-blur-md">

                      <Eye
                        size={14}
                        className="text-yellow-400"
                      />

                      <span className="text-[9px] font-black uppercase tracking-wider text-white">
                        View Full Image
                      </span>

                    </div>

                  </button>


                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div className="p-6 sm:p-7">

                    <div className="mb-3 flex items-center justify-between">

                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                        {item.row}
                      </span>

                      <span className="h-1 w-10 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-16" />

                    </div>


                    <h3 className="text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>


                    <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">
                      {item.description}
                    </p>


                    {/* Bottom Card Action */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                      <button
                        type="button"
                        onClick={() =>
                          openImage(item.image, item.title)
                        }
                        className="flex items-center gap-2"
                      >

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">

                          <Eye size={15} />

                        </div>

                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-yellow-600">
                          Project Visual
                        </span>

                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          openImage(item.image, item.title)
                        }
                        aria-label={`Open ${item.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                      >

                        <ArrowUpRight size={16} />

                      </button>

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED WORK
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-[32px] bg-[#11110f]">

            {/* Featured Image */}

            <img
              src={featuredWorkImage}
              alt="Pawanputra featured construction work"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />


            {/* Content */}

            <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

              <div className="max-w-2xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5">

                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-300">
                    Featured Work
                  </span>

                </div>


                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">

                  Built With

                  <span className="block text-yellow-400">
                    Purpose & Precision.
                  </span>

                </h2>


                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">

                  Every project begins with understanding the site,
                  planning the right approach and executing the work with
                  attention to quality, safety and long-term performance.

                </p>


                <div className="mt-7 grid gap-3 sm:grid-cols-3">

                  {[
                    "Site Planning",
                    "Quality Execution",
                    "Reliable Results",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-md"
                    >

                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-yellow-400"
                      />

                      <span className="text-[10px] font-bold text-white/80">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>


            {/* Featured Image View Button */}

            <button
              type="button"
              onClick={() =>
                openImage(
                  featuredWorkImage,
                  "Featured Construction Work"
                )
              }
              className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl border border-white/20 bg-black/65 px-4 py-3 backdrop-blur-md"
            >

              <Eye
                size={15}
                className="text-yellow-400"
              />

              <span className="text-[9px] font-black uppercase tracking-wider text-white">
                View Project Visual
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#11110f] py-16 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

          <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-yellow-400">

            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

            Explore Our Work

          </span>


          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">

            See What We

            <span className="text-yellow-400">
              {" "}Build.
            </span>

          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55">

            From infrastructure and civil construction to industrial
            development, our project experience is built around
            dependable execution and long-term value.

          </p>


          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-xs font-black text-black shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
          >

            Discuss Your Project

            <ArrowUpRight size={16} />

          </a>

        </div>

      </section>


      {/* =====================================================
          FULL IMAGE POPUP / LIGHTBOX
      ====================================================== */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >

          {/* Popup Content */}

          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={closeImage}
              aria-label="Close image popup"
              className="absolute right-1 top-1 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-xl hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:right-3 sm:top-3"
            >

              <X size={22} />

            </button>


            {/* Main Image Container */}

            <div className="relative flex max-h-[94vh] max-w-[96vw] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[88vh] max-w-[94vw] object-contain"
              />

            </div>


            {/* Image Title */}

            <div className="absolute bottom-1 left-1/2 w-[90%] -translate-x-1/2 text-center sm:bottom-3">

              <div className="inline-flex max-w-full items-center gap-2 rounded-xl border border-yellow-400/20 bg-black/80 px-4 py-2.5 backdrop-blur-md">

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />

                <span className="truncate text-[10px] font-bold text-white sm:text-xs">
                  {selectedImage.title}
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Gallery;