import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIAssistant from "./components/AIAssistant";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import CompanyProfile from "./components/CompanyProfile";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 text-slate-900">

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-[74px]">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/gallery" element={<Gallery />} />
     
<Route path="/profile" element={<CompanyProfile />} />

            {/* Wrong URL */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[70vh] items-center justify-center px-6">
                  <div className="text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                      404
                    </p>

                    <h1 className="mt-3 text-4xl font-black text-slate-900">
                      Page Not Found
                    </h1>

                    <p className="mt-3 text-slate-500">
                      The page you are looking for does not exist.
                    </p>

                    <a
                      href="/"
                      className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      Back To Home
                    </a>

                  </div>
                </div>
              }
            />

          </Routes>

        </main>

        {/* Global Footer */}
        <Footer />
<AIAssistant />
<WhatsAppButton />
      </div>

    </BrowserRouter>
  );
}

export default App;