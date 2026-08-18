
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  X,
  Menu,
  ArrowRight,
} from "lucide-react";

import EnquiryForm from "./components/EnquiryForm";

// ======================================================
// ASSETS
// ======================================================

const assets = import.meta.glob("./assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getAsset = (fileName, fallback = "") => {
  const target = fileName.toLowerCase();

  const found = Object.entries(assets).find(([path]) => {
    const actualName = path.split("/").pop().toLowerCase();
    return actualName === target;
  });

  return found ? found[1] : fallback;
};

const logo = getAsset(
  "pawan_putra_enterprises_logo.png",
  getAsset("logo1.png")
);

// ======================================================
// NAV ITEMS
// ======================================================

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

// ======================================================
// NAVBAR
// ======================================================

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openQuote = () => {
    setMenuOpen(false);
    setQuoteOpen(true);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
  };

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header className="fixed left-0 top-0 z-[100] w-full">

        {/* Top Gold Line */}

        <div className="h-[3px] w-full bg-[#d6a82e]" />

        {/* Main Navbar */}

        <div className="border-b border-white/10 bg-[#11110f]/95 shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <nav className="flex h-[76px] items-center justify-between">

              {/* ==================================================
                  LOGO
              ================================================== */}

              <NavLink
                to="/"
                onClick={closeMenu}
                className="group flex min-w-0 items-center gap-3"
              >

                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#d6a82e]/30 bg-white p-1 shadow-lg transition-all duration-300 group-hover:border-[#d6a82e] group-hover:shadow-[#d6a82e]/20 sm:h-12 sm:w-12">

                  {logo ? (
                    <img
                      src={logo}
                      alt="Pawan Putra Enterprises"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-lg font-black text-[#11110f]">
                      PP
                    </span>
                  )}

                </div>

                <div className="min-w-0 leading-none">

                  <h1 className="truncate text-[13px] font-black tracking-[0.08em] text-white sm:text-[17px]">
                    PAWAN PUTRA
                  </h1>

                  <div className="mt-1 flex items-center gap-2">

                    <span className="h-[1px] w-5 shrink-0 bg-[#d6a82e]" />

                    <p className="text-[7px] font-bold tracking-[0.30em] text-[#d6a82e] sm:text-[9px]">
                      ENTERPRISES
                    </p>

                  </div>

                </div>

              </NavLink>


              {/* ==================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <div className="hidden items-center gap-1 lg:flex">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `group relative mx-1 px-3 py-2 text-[12px] font-bold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-[#e0b43b]"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >

                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>

                        <span
                          className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#d6a82e] transition-all duration-300 ${
                            isActive
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                          }`}
                        />
                      </>
                    )}

                  </NavLink>
                ))}

              </div>


              {/* ==================================================
                  DESKTOP GET QUOTE
              ================================================== */}

              <button
                type="button"
                onClick={openQuote}
                className="
                  group ml-4 hidden
                  items-center gap-2
                  rounded-xl
                  bg-[#d6a82e]
                  px-5 py-3
                  text-[11px]
                  font-black
                  tracking-wide
                  text-[#11110f]
                  shadow-lg
                  shadow-[#d6a82e]/10
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#edc653]
                  lg:flex
                "
              >

                Get Quote

                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>


              {/* ==================================================
                  MOBILE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-white
                  transition
                  hover:border-[#d6a82e]/50
                  hover:bg-[#d6a82e]/10
                  lg:hidden
                "
              >

                {menuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}

              </button>

            </nav>


            {/* ==================================================
                MOBILE NAVIGATION
            ================================================== */}

            <div
              className={`overflow-hidden transition-all duration-500 lg:hidden ${
                menuOpen
                  ? "max-h-[600px] pb-5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <div className="rounded-2xl border border-white/10 bg-[#191916] p-2">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                        isActive
                          ? "bg-[#d6a82e] text-[#11110f]"
                          : "text-white/75 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >

                    {item.name}

                    <ArrowRight size={14} />

                  </NavLink>
                ))}


                {/* Mobile Get Quote */}

                <button
                  type="button"
                  onClick={openQuote}
                  className="
                    mt-2
                    flex w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-[#d6a82e]
                    px-4 py-3.5
                    text-sm
                    font-black
                    text-[#11110f]
                    transition
                    hover:bg-[#edc653]
                  "
                >

                  Get Free Quote

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </header>


      {/* ==================================================
          GET QUOTE MODAL
          ACTUAL EnquiryForm COMPONENT
      ================================================== */}

      {quoteOpen && (
        <div
          className="
            fixed inset-0
            z-[999]
            overflow-y-auto
            bg-black/75
            px-3
            py-4
            backdrop-blur-sm
            sm:px-5
            sm:py-8
          "
          onClick={closeQuote}
        >

          {/* Modal Center Wrapper */}

          <div className="flex min-h-full items-center justify-center">

            {/* Modal */}

            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                overflow-hidden
                rounded-[24px]
                border
                border-[#d6a82e]/20
                bg-[#0f0f0e]
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                sm:rounded-[30px]
              "
            >

              {/* Gold Top Line */}

              <div className="h-1.5 w-full bg-[#d6a82e]" />


              {/* Close Button */}

              <button
                type="button"
                onClick={closeQuote}
                aria-label="Close enquiry form"
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-white/60
                  backdrop-blur-md
                  transition-all
                  hover:border-[#d6a82e]
                  hover:bg-[#d6a82e]
                  hover:text-black
                  sm:right-4
                  sm:top-4
                "
              >
                <X size={17} />
              </button>


              {/* ==================================================
                  ENQUIRY FORM
              ================================================== */}

              <div className="
                max-h-[calc(100vh-40px)]
                overflow-y-auto
                p-2
                sm:max-h-[calc(100vh-64px)]
                sm:p-3
              ">

                <EnquiryForm />

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;
