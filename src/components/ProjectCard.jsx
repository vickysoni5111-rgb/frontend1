import React from "react";
import {
  ArrowUpRight,
  Truck,
  Construction,
  Home,
  Route,
  HardHat,
  Factory,
} from "lucide-react";

const ProjectCard = ({
  image,
  number = "01",
  category = "Construction",
  title,
  description,
  location = "Rajasthan",
  type = "Project Execution",
}) => {
  // Category ke according icon
  const getIcon = () => {
    const value = category.toLowerCase();

    if (value.includes("supply")) return Truck;
    if (value.includes("road") || value.includes("highway")) return Route;
    if (value.includes("home") || value.includes("residential")) return Home;
    if (value.includes("civil")) return HardHat;
    if (value.includes("industrial")) return Factory;

    return Construction;
  };

  const CategoryIcon = getIcon();

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200 bg-white
        shadow-sm transition-all duration-300
        hover:-translate-y-1
        hover:border-yellow-300
        hover:shadow-xl hover:shadow-yellow-900/10
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[190px] overflow-hidden sm:h-[200px]">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />

        {/* Top left number */}
        <div className="absolute left-3 top-3">
          <div
            className="
            flex h-8 w-8 items-center justify-center
            rounded-lg border border-white/20
            bg-black/40 backdrop-blur-md
          "
          >
            <span className="text-[10px] font-black text-yellow-400">
              {number}
            </span>
          </div>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <div
            className="
            inline-flex items-center gap-1.5
            rounded-full bg-yellow-400
            px-3 py-1.5
            text-[8px] font-black uppercase
            tracking-[0.12em] text-black
            shadow-md shadow-black/20
          "
          >
            <CategoryIcon size={11} />
            {category}
          </div>
        </div>

        {/* Floating arrow */}
        <div
          className="
          absolute bottom-3 right-3
          flex h-9 w-9 items-center justify-center
          rounded-full border border-white/20
          bg-white/10 text-white
          backdrop-blur-md
          transition-all duration-300
          group-hover:rotate-45
          group-hover:bg-yellow-400
          group-hover:border-yellow-400
          group-hover:text-black
        "
        >
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5">
        {/* Small heading */}
        <div className="mb-2.5 flex items-center justify-between">
          <span
            className="
            text-[8px] font-black uppercase
            tracking-[0.18em] text-yellow-600
          "
          >
            Pawanputra Enterprises
          </span>
          <span className="h-1 w-7 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-11" />
        </div>

        {/* Title */}
        <h3
          className="
          line-clamp-1
          text-base font-black leading-tight
          tracking-tight text-slate-900
          sm:text-lg
        "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
          mt-2 line-clamp-2
          text-xs leading-5 text-slate-500
        "
        >
          {description}
        </p>

        {/* =================================================
            PROJECT DETAILS
        ================================================== */}

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {/* Location */}
          <div
            className="
            rounded-lg border border-slate-100
            bg-slate-50 px-3 py-2
            transition-colors duration-300
            group-hover:border-yellow-200
            group-hover:bg-yellow-50/50
          "
          >
            <p
              className="
              text-[7px] font-black uppercase
              tracking-[0.14em] text-slate-400
            "
            >
              Location
            </p>
            <p className="mt-0.5 text-[11px] font-bold text-slate-700">
              {location}
            </p>
          </div>

          {/* Project Type */}
          <div
            className="
            rounded-lg border border-slate-100
            bg-slate-50 px-3 py-2
            transition-colors duration-300
            group-hover:border-yellow-200
            group-hover:bg-yellow-50/50
          "
          >
            <p
              className="
              text-[7px] font-black uppercase
              tracking-[0.14em] text-slate-400
            "
            >
              Project Type
            </p>
            <p className="mt-0.5 text-[11px] font-bold text-slate-700">
              {type}
            </p>
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
          mt-4 flex items-center justify-between
          border-t border-slate-100 pt-3.5
        "
        >
          <div className="flex items-center gap-1.5">
            <span
              className="
              h-1.5 w-1.5 rounded-full
              bg-green-500
              shadow-sm shadow-green-500/50
            "
            />
            <span className="text-[9px] font-bold text-slate-700">
              Successfully Executed
            </span>
          </div>

          <a
            href="/contact"
            className="
              group/button
              inline-flex items-center gap-1.5
              rounded-lg bg-slate-950
              px-3.5 py-2
              text-[8px] font-black
              uppercase tracking-wider
              text-yellow-400
              transition-all duration-300
              hover:bg-yellow-400
              hover:text-black
            "
          >
            Discuss Project
            <ArrowUpRight
              size={11}
              className="
                transition-transform duration-300
                group-hover/button:translate-x-0.5
                group-hover/button:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;