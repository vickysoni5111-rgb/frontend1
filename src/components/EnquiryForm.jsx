import React, { useState } from "react";
import {
  Send,
  User,
  Phone,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle2,
  Loader2,
  AlertCircle,
  X,
} from "lucide-react";

// Safe API configuration pointing directly to your Render backend
const API_URL = 
  (typeof import.meta !== "undefined" && import.meta.env && (import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL)) || 
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_URL) || 
  "https://backend1-pew7.onrender.com/api";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit enquiry."
        );
      }

      setFormData(initialFormData);
      setSuccessPopup(true);
    } catch (err) {
      console.error("ENQUIRY ERROR:", err);

      setError(
        err.message ||
          "Unable to send enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ==================================================
          POPUP FORM
      ================================================== */}

      <div className="overflow-hidden rounded-[24px] bg-[#f7f5ed]">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="relative overflow-hidden bg-[#11110f] px-5 py-6 sm:px-7 sm:py-7">

          {/* Decorative glow */}

          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-yellow-500/5 blur-3xl" />

          <div className="relative pr-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

              <span className="text-[8px] font-black uppercase tracking-[0.24em] text-yellow-400 sm:text-[9px]">
                Project Enquiry
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              Tell Us About
              <span className="block text-yellow-400">
                Your Project.
              </span>
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-5 text-white/50 sm:text-sm">
              Share your requirement and our team will connect
              with you shortly.
            </p>
          </div>

        </div>


        {/* ==================================================
            FORM AREA
        ================================================== */}

        <div className="p-4 sm:p-6">

          {/* Error */}

          {error && (
            <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5">

              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-red-500"
              />

              <div>
                <p className="text-[11px] font-black text-red-600">
                  Unable To Send Enquiry
                </p>

                <p className="mt-1 text-[10px] leading-5 text-red-500/80">
                  {error}
                </p>
              </div>

            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Name / Phone */}

            <div className="grid gap-3 sm:grid-cols-2">

              <Input
                icon={User}
                label="Your Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                icon={Phone}
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email / Company */}

            <div className="grid gap-3 sm:grid-cols-2">

              <Input
                icon={Mail}
                label="Email Address"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                icon={Building2}
                label="Company"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />

            </div>


            {/* Service */}

            <div>

              <label className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
                Required Service
              </label>

              <div className="relative">

                <Building2
                  size={15}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="
                    h-[50px]
                    w-full
                    appearance-none
                    rounded-xl
                    border border-slate-200
                    bg-white
                    pl-11
                    pr-4
                    text-xs
                    font-semibold
                    text-slate-700
                    outline-none
                    transition
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-500/10
                  "
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Road & Highway Construction">
                    Road & Highway Construction
                  </option>

                  <option value="Civil Construction">
                    Civil Construction
                  </option>

                  <option value="Earthwork & Excavation">
                    Earthwork & Excavation
                  </option>

                  <option value="Electrical Projects">
                    Electrical Projects
                  </option>

                  <option value="Water Supply Systems">
                    Water Supply Systems
                  </option>

                  <option value="Fire Fighting Systems">
                    Fire Fighting Systems
                  </option>

                  <option value="Industrial Infrastructure">
                    Industrial Infrastructure
                  </option>

                  <option value="Project Consultancy">
                    Project Consultancy
                  </option>

                </select>

              </div>

            </div>


            {/* Message */}

            <div>

              <label className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
                Project Details
              </label>

              <div className="relative">

                <MessageSquare
                  size={15}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    min-h-[110px]
                    w-full
                    resize-none
                    rounded-xl
                    border border-slate-200
                    bg-white
                    py-3.5
                    pl-11
                    pr-4
                    text-xs
                    font-medium
                    text-slate-800
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-500/10
                  "
                />

              </div>

            </div>


            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#11110f]
                px-5
                py-3.5
                text-xs
                font-black
                text-yellow-400
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-yellow-400
                hover:text-black
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
              "
            >

              {loading ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Sending Enquiry...
                </>
              ) : (
                <>
                  Submit Project Enquiry

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}

            </button>


            {/* Privacy */}

            <div className="flex items-center justify-center gap-2 pt-1">

              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

              <p className="text-center text-[9px] leading-4 text-slate-400">
                Your information is handled professionally and
                used only for enquiry purposes.
              </p>

            </div>

          </form>

        </div>

      </div>


      {/* ==================================================
          SUCCESS POPUP
      ================================================== */}

      {successPopup && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
          onClick={() => setSuccessPopup(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-sm
              overflow-hidden
              rounded-[26px]
              border border-yellow-400/20
              bg-[#11110f]
              px-6 py-7
              text-center
              shadow-[0_30px_100px_rgba(0,0,0,0.5)]
              sm:px-8
              sm:py-8
            "
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSuccessPopup(false)}
              className="
                absolute
                right-3
                top-3
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/5
                text-white/50
                transition
                hover:bg-yellow-400
                hover:text-black
              "
            >
              <X size={16} />
            </button>


            {/* Icon */}

            <div className="
              mx-auto
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-yellow-400
              text-black
              shadow-lg
              shadow-yellow-400/20
            ">

              <CheckCircle2
                size={31}
                strokeWidth={2.3}
              />

            </div>


            <p className="
              mt-5
              text-[9px]
              font-black
              uppercase
              tracking-[0.25em]
              text-yellow-400
            ">
              Enquiry Received
            </p>

            <h3 className="
              mt-2
              text-2xl
              font-black
              text-white
            ">
              Thank You!
            </h3>

            <p className="
              mt-3
              text-sm
              font-semibold
              leading-6
              text-yellow-400
            ">
              Thanks for connecting with
              Pawanputra Enterprises.
            </p>

            <p className="
              mt-2
              text-xs
              leading-6
              text-white/50
            ">
              Our team has received your enquiry and
              will connect with you shortly.
            </p>


            <button
              type="button"
              onClick={() => setSuccessPopup(false)}
              className="
                mt-6
                w-full
                rounded-xl
                bg-yellow-400
                px-5
                py-3
                text-xs
                font-black
                text-black
                transition
                hover:bg-yellow-300
              "
            >
              Continue
            </button>

          </div>

        </div>
      )}
    </>
  );
};


// ======================================================
// INPUT COMPONENT (Added onChange prop here)
// ======================================================

const Input = ({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>

      <label className="
        mb-1.5
        block
        text-[9px]
        font-black
        uppercase
        tracking-[0.16em]
        text-slate-500
      ">
        {label}
      </label>

      <div className="relative">

        <Icon
          size={15}
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="
            h-[50px]
            w-full
            rounded-xl
            border border-slate-200
            bg-white
            pl-11
            pr-4
            text-xs
            font-semibold
            text-slate-800
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-yellow-500
            focus:ring-2
            focus:ring-yellow-500/10
          "
        />

      </div>

    </div>
  );
};

export default EnquiryForm;