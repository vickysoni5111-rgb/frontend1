import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) => {
  return (
    <div
      className={`
        max-w-3xl
        ${align === "center" ? "mx-auto text-center" : "text-left"}
      `}
    >
      {/* Small Heading */}
      {eyebrow && (
        <span className="global-eyebrow">
          {eyebrow}
        </span>
      )}

      {/* Main Heading */}
      <h2 className="global-heading">
        {title}

        {highlight && (
          <>
            <br />
            <span className="global-heading-highlight">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="global-heading-description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;