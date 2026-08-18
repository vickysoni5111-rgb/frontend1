
import React from "react";

// ======================================================
// CUSTOM WHATSAPP ICON
// ======================================================

const WhatsAppIcon = ({ size = 30 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.49 0 .14 5.35.14 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.88 11.88 0 0 0 5.8 1.48h.01c6.56 0 11.9-5.35 11.9-11.91 0-3.18-1.24-6.17-3.44-8.45ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.98.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.29C2.2 6.46 6.63 2.03 12.06 2.03a9.86 9.86 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.91 7.02c0 5.43-4.42 9.84-9.93 9.84Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.85.12.57-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
};

// ======================================================
// WHATSAPP FLOATING BUTTON
// ======================================================

const WhatsAppButton = () => {
  const phoneNumber = "918946955587";

  const message = encodeURIComponent(
    "Hello Pawan Putra Enterprises, I would like to discuss a project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pawan Putra Enterprises on WhatsApp"
      className="
        group
        fixed
        bottom-5
        left-5
        z-[900]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_12px_35px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110
        hover:shadow-[0_15px_40px_rgba(37,211,102,0.45)]
        sm:bottom-7
        sm:left-7
        sm:h-16
        sm:w-16
      "
    >
      {/* ==================================================
          PULSE RING
      ================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border-2
          border-[#25D366]/50
          animate-ping
        "
      />

      {/* ==================================================
          WHITE INNER CIRCLE
      ================================================== */}

      <span
        className="
          relative
          z-10
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#25D366]
          shadow-sm
          transition-all
          duration-300
          group-hover:rotate-6
          sm:h-12
          sm:w-12
        "
      >
        <WhatsAppIcon size={28} />
      </span>

      {/* ==================================================
          ONLINE DOT
      ================================================== */}

      <span
        className="
          absolute
          right-0.5
          top-0.5
          z-20
          h-3.5
          w-3.5
          rounded-full
          border-2
          border-white
          bg-[#19c463]
        "
      />

      {/* ==================================================
          TOOLTIP
      ================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-full
          left-1/2
          mb-3
          -translate-x-1/2
          whitespace-nowrap
          rounded-lg
          bg-[#11110f]
          px-3
          py-2
          text-[9px]
          font-black
          uppercase
          tracking-[0.12em]
          text-white
          opacity-0
          shadow-xl
          transition-all
          duration-300
          group-hover:opacity-100
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;

