"use client";

import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const GOOGLE_FORM_URL = "";

export default function FeedbackWidget() {
  const [pathname, setPathname] = useState("");
  const [rating, setRating] = useState<"helpful" | "not_helpful" | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setPathname(path);
    const stored = localStorage.getItem(`feedback-${path}`);
    if (stored) {
      setSubmitted(true);
    }
  }, []);

  const handleRating = (value: "helpful" | "not_helpful") => {
    setRating(value);
  };

  const handleSubmit = async () => {
    if (!rating) return;
    setSubmitting(true);

    try {
      if (GOOGLE_FORM_URL) {
        const formData = new URLSearchParams();
        formData.append("page_path", pathname);
        formData.append("rating", rating);
        formData.append("comment", comment);

        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      }

      trackEvent("feedback_submitted", { page: pathname, rating });
      localStorage.setItem(`feedback-${pathname}`, JSON.stringify({ rating, comment, ts: Date.now() }));
      setSubmitted(true);
    } catch {
      // Still mark as submitted locally even if the form POST fails
      trackEvent("feedback_submitted", { page: pathname, rating });
      localStorage.setItem(`feedback-${pathname}`, JSON.stringify({ rating, comment, ts: Date.now() }));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 text-center">
        <p className="text-neutral-600 font-medium">Thank you for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
      {!rating ? (
        <div className="flex flex-col items-center gap-3">
          <p className="font-heading font-semibold text-neutral-700 text-sm">
            Was this page helpful?
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleRating("helpful")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-brand-600 transition-colors text-sm font-medium"
              aria-label="Yes, this was helpful"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"
                />
              </svg>
              Yes
            </button>
            <button
              onClick={() => handleRating("not_helpful")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors text-sm font-medium"
              aria-label="No, this was not helpful"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z"
                />
              </svg>
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="font-heading font-semibold text-neutral-700 text-sm text-center">
            How could we improve this page?
          </p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Optional — share any suggestions..."
            rows={3}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 resize-none"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-5 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
