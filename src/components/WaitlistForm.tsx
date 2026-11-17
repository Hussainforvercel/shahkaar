"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setStatus("error");
      setFeedbackMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus("error");
        setFeedbackMessage(data?.error || "Unable to join the list. Please try again.");
        return;
      }

      setSubmittedEmail(cleanEmail);
      setStatus("success");
      setFeedbackMessage(data?.message || "You're on the VIP list for shahkaar.store");
      setEmail("");
    } catch {
      setStatus("error");
      setFeedbackMessage("Network connection interrupted. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      {status === "success" ? (
        <div className="rounded-2xl border border-[#D4AF37]/35 bg-[#140A0F]/90 p-6 text-center backdrop-blur-md shadow-[0_0_35px_-5px_rgba(90,17,30,0.5)]">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#240D16] text-[#E7C96E]">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-xl font-normal text-[#FAF7F2]">
            Invitation Reserved
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#A39B94] leading-relaxed">
            You&apos;re on the private VIP list for <span className="text-[#E7C96E] font-medium">shahkaar.store</span>.
            We will notify <span className="underline decoration-[#D4AF37]/40 text-[#FAF7F2]">{submittedEmail}</span> with private launch access.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]/80 hover:text-[#E7C96E] transition-colors underline underline-offset-4 cursor-pointer"
          >
            Register another email
          </button>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl border border-[#D4AF37]/25 bg-[#12080D]/85 p-2 backdrop-blur-md transition-all duration-300 focus-within:border-[#D4AF37]/55 focus-within:shadow-[0_0_30px_-5px_rgba(212,175,55,0.18)]"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "loading"}
              placeholder="Enter your email for private launch access..."
              aria-label="Email address for private launch access"
              className="flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-[#FAF7F2] placeholder-[#736B65] focus:outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E7C96E] via-[#D4AF37] to-[#B89230] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0608] shadow-[0_2px_15px_-2px_rgba(212,175,55,0.35)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-[#0A0608]" />
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Get Early Access</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          {status === "error" && (
            <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-[#E57373]">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <p className="mt-3 text-center text-[11px] text-[#8C847E] tracking-wide">
            Private 48-hour access window &bull; No spam &bull; Unsubscribe anytime
          </p>
        </div>
      )}
    </div>
  );
}
