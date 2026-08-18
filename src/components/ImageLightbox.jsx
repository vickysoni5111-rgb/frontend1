import React, { useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

const ImageLightbox = ({ image, title, onClose }) => {
  // ESC press karke popup close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Background scroll lock
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-yellow-400 hover:text-black"
        aria-label="Close image"
      >
        <X size={22} />
      </button>

      {/* Image Container */}
      <div
        className="relative flex max-h-[92vh] max-w-[94vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl border border-yellow-400/30 bg-black shadow-2xl shadow-black/60">
          <img
            src={image}
            alt={title || "Project Visual"}
            className="max-h-[82vh] max-w-[92vw] object-contain"
          />
        </div>

        {/* Image Title */}
        {title && (
          <div className="mt-4 flex items-center gap-2 rounded-full border border-yellow-400/20 bg-black/70 px-5 py-2.5 backdrop-blur-md">
            <Maximize2 size={14} className="text-yellow-400" />

            <span className="text-xs font-bold text-white">
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;