import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Bot,
  X,
  User,
  Send,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  query: "",
};

const AIAssistant = () => {
  const location = useLocation();
  const messagesEndRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! 👋 Welcome to Pawanputra Enterprises PVT LTD. What should we call you?",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setOpen(false);
      return;
    }

    const alreadyOpened = sessionStorage.getItem("pawanputra_ai_opened");
    if (alreadyOpened) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("pawanputra_ai_opened", "true");
    }, 1400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const validateInput = (currentStepIndex, value) => {
    const val = value.trim();
    if (!val) return "Please enter the required information.";
    if (currentStepIndex === 1) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) return "Please enter a valid email address.";
    }
    if (currentStepIndex === 2) {
      const phoneDigits = val.replace(/\D/g, "");
      if (phoneDigits.length < 10) return "Please enter a valid 10-digit mobile number.";
    }
    return "";
  };

  const handleSend = async () => {
    const errorMsg = validateInput(step, input);
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    const userText = input.trim();
    const updatedMessages = [...messages, { sender: "user", text: userText }];
    setMessages(updatedMessages);
    setInput("");

    let updatedData = { ...formData };
    if (step === 0) updatedData.name = userText;
    else if (step === 1) updatedData.email = userText;
    else if (step === 2) updatedData.phone = userText;
    else if (step === 3) updatedData.address = userText;
    else if (step === 4) updatedData.query = userText;

    setFormData(updatedData);

    const nextStep = step + 1;

    if (nextStep < 5) {
      setStep(nextStep);
      setLoading(true);

      const userName = updatedData.name;
      let nextQuestion = "";

      if (nextStep === 1) {
        nextQuestion = `Thanks ${userName}! 🤝 Where can our team email your quotes or catalog?`;
      } else if (nextStep === 2) {
        nextQuestion = `Got it, ${userName}! What is the best phone number to reach you?`;
      } else if (nextStep === 3) {
        nextQuestion = `Great, ${userName}. Could you share your address or project location?`;
      } else if (nextStep === 4) {
        nextQuestion = `Final step, ${userName} — how can we help you with our services?`;
      }

      setTimeout(() => {
        setMessages([
          ...updatedMessages,
          { sender: "bot", text: nextQuestion },
        ]);
        setLoading(false);
      }, 500);
    } else {
      setLoading(true);
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

        const response = await fetch(`${backendUrl}/api/enquiry`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: updatedData.name,
            email: updatedData.email,
            phone: updatedData.phone,
            company: "PAWAN PUTRA ENTERPRISES PVT LTD",
            service: "General Enquiry",
            place: updatedData.address,
            message: updatedData.query,
          }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Unable to submit enquiry.");

        setSuccess(true);
      } catch (error) {
        console.error("ERROR:", error);
        alert(error.message || "Unable to send enquiry. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setInput("");
    setStep(0);
    setSuccess(false);
    setMessages([
      {
        sender: "bot",
        text: "Hi there! 👋 Welcome to PAWAN PUTRA ENTERPRISES PVT LTD. What should we call you?",
      },
    ]);
    setOpen(true);
  };

  if (location.pathname !== "/") return null;

  return (
    <>
      {!open && (
        <div className="fixed bottom-6 right-6 z-[950] sm:bottom-8 sm:right-8">
          <div className="absolute -top-10 right-0 whitespace-nowrap rounded-full border border-amber-500/30 bg-neutral-900 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-400 shadow-xl backdrop-blur-md animate-bounce">
            Need Help? ✨
          </div>
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full border-2 border-amber-400/40" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/50 bg-neutral-950 text-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 hover:border-amber-400 sm:h-18 sm:w-18"
          >
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-neutral-950 shadow-inner transition duration-300 group-hover:rotate-12 sm:h-14 sm:w-14">
              <Bot size={26} strokeWidth={2.2} />
              <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-amber-400 bg-emerald-500" />
            </span>
          </button>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm sm:items-end sm:justify-end sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-[520px] w-full max-w-[400px] flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-[#fbf9f5] shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
          >
            <div className="relative flex items-center justify-between bg-neutral-950 px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-neutral-950 shadow-md">
                  <Bot size={20} strokeWidth={2.2} />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-neutral-950 bg-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                      Pawanputra AI
                    </p>
                    <Sparkles size={11} className="text-amber-400 animate-pulse" />
                  </div>
                  <p className="text-[11px] font-medium text-neutral-300">Online Assistant</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-neutral-400 transition hover:bg-amber-400 hover:text-neutral-950"
              >
                <X size={15} />
              </button>
            </div>

            {success ? (
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-neutral-950 shadow-lg shadow-amber-400/20">
                  <CheckCircle2 size={30} strokeWidth={2.5} />
                </div>
                <p className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-amber-700">
                  Enquiry Registered
                </p>
                <h2 className="mt-1 text-xl font-black text-neutral-900">Thank You, {formData.name}!</h2>
                <p className="mt-1.5 text-xs font-semibold text-neutral-600">
                  We have received your details successfully. Our team will contact you soon.
                </p>

                <div className="mt-5 flex w-full gap-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 rounded-xl border border-neutral-300 bg-white py-2.5 text-xs font-bold text-neutral-700 transition hover:bg-neutral-50"
                  >
                    New Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-xl bg-neutral-950 py-2.5 text-xs font-bold text-amber-400 transition hover:bg-amber-400 hover:text-neutral-950"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        msg.sender === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      {msg.sender === "bot" ? (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400 shadow-sm">
                          <Bot size={13} />
                        </div>
                      ) : (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-neutral-950 shadow-sm">
                          <User size={13} />
                        </div>
                      )}

                      <div
                        className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs font-medium shadow-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "rounded-br-sm bg-neutral-950 text-amber-300"
                            : "rounded-tl-sm bg-white text-neutral-800 border border-neutral-200/80"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-amber-400">
                        <Bot size={13} />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 border border-neutral-200/80 shadow-sm">
                        <Loader2 size={14} className="animate-spin text-amber-600" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="shrink-0 border-t border-neutral-200 bg-white p-3">
                  <div className="flex items-center gap-2">
                    <input
                      autoFocus
                      type={step === 1 ? "email" : "text"}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder={
                        step === 0 ? "Type your full name..." :
                        step === 1 ? "name@example.com" :
                        step === 2 ? "+91 98765 43210" :
                        step === 3 ? "City / Project Location" : "Describe your requirement..."
                      }
                      className="h-10 flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 text-xs font-medium text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                    />

                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!input.trim() || loading}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-amber-400 transition hover:bg-amber-400 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {loading ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                    </button>
                  </div>
                  <div className="mt-1.5 text-center text-[9px] text-neutral-400">
                    Pawanputra AI Assistant • Press Enter ↵ to send
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;