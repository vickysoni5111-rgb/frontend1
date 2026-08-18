import React from "react";

const ServiceCard = ({
  number,
  title,
  description,
  image,
  delay = 0,
}) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-100/60"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-blue-600 shadow-md">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-slate-900">
          {title}
        </h3>

        <div className="mt-3 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center text-xs font-extrabold text-blue-600 transition-colors hover:text-blue-800"
        >
          Learn More
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;