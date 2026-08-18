import React from "react";

const WorkCard = ({
  image,
  title,
  category,
  description,
  reverse = false,
  delay = 0,
}) => {
  return (
    <article
      data-aos={reverse ? "fade-left" : "fade-right"}
      data-aos-delay={delay}
      className={`group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/60 md:grid-cols-2 ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative min-h-[270px] overflow-hidden md:min-h-[340px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />

        <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-lg backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-blue-600">
          Featured Work
        </span>

        <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
          {title}
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-blue-600" />

        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-blue-700">
            Quality Execution
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-600">
            Professional Planning
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-600">
            Reliable Results
          </span>
        </div>

        <a
          href="#contact"
          className="mt-7 w-fit rounded-lg bg-blue-600 px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Discuss Your Project →
        </a>
      </div>
    </article>
  );
};

export default WorkCard;