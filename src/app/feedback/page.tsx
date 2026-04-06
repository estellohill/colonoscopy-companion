"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

const GOOGLE_FORM_URL = "";

const STORAGE_KEY = "survey-feedback-completed";

const questions = [
  "How helpful was this website in preparing for your colonoscopy?",
  "How confident did you feel about your prep after using this site?",
  "How would you rate the quality of information provided?",
  "How easy was this website to use?",
  "How likely are you to recommend this to other patients?",
];

const starLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

export default function FeedbackPage() {
  const [scores, setScores] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<{
    question: number;
    star: number;
  } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSubmitted(true);
    }
  }, []);

  const allAnswered = scores.every((s) => s !== null);

  const handleScore = (questionIndex: number, value: number) => {
    setScores((prev) => {
      const next = [...prev];
      next[questionIndex] = value;
      return next;
    });
  };

  const handleSubmit = async () => {
    if (!allAnswered) return;
    setSubmitting(true);

    const scoreData: Record<string, string | number> = {};
    scores.forEach((s, i) => {
      scoreData[`q${i + 1}`] = s as number;
    });

    try {
      if (GOOGLE_FORM_URL) {
        const formData = new URLSearchParams();
        formData.append("page_path", "/feedback");
        scores.forEach((s, i) => {
          formData.append(`q${i + 1}`, String(s));
        });
        formData.append("comment", comment);

        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      }

      trackEvent("survey_completed", scoreData);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ scores, comment, ts: Date.now() })
      );
      setSubmitted(true);
    } catch {
      trackEvent("survey_completed", scoreData);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ scores, comment, ts: Date.now() })
      );
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 sm:p-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-neutral-800">
            Thank you for your feedback!
          </h1>
          <p className="text-neutral-600">
            Your responses help us improve our patient education materials.
          </p>
          <p className="text-neutral-500 text-sm">You may close this page.</p>
          <Link
            href="/"
            className="inline-block mt-4 px-5 py-2 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-brand-600 hover:text-brand-700 font-medium mb-8 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-800 mb-3">
            Post-Procedure Feedback
          </h1>
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
            <p className="text-sm text-brand-800">
              This anonymous survey helps us improve our patient education
              materials. Your responses are confidential and will only be used
              for quality improvement.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, qi) => {
            const currentScore = scores[qi];
            const hovered =
              hoveredStar?.question === qi ? hoveredStar.star : null;

            return (
              <div
                key={qi}
                className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-3"
              >
                <p className="font-heading font-semibold text-neutral-700 text-sm sm:text-base">
                  {qi + 1}. {question}
                </p>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const filled =
                      hovered !== null
                        ? star <= hovered
                        : currentScore !== null && star <= currentScore;

                    return (
                      <button
                        key={star}
                        onClick={() => handleScore(qi, star)}
                        onMouseEnter={() =>
                          setHoveredStar({ question: qi, star })
                        }
                        onMouseLeave={() => setHoveredStar(null)}
                        className="p-1 transition-transform hover:scale-110"
                        aria-label={`${star} star${star > 1 ? "s" : ""} - ${starLabels[star - 1]}`}
                      >
                        <svg
                          className={`w-8 h-8 transition-colors ${
                            filled ? "text-brand-500" : "text-neutral-300"
                          }`}
                          fill={filled ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </button>
                    );
                  })}
                  {currentScore !== null && (
                    <span className="ml-2 text-xs text-neutral-500">
                      {starLabels[currentScore - 1]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-3">
          <p className="font-heading font-semibold text-neutral-700 text-sm sm:text-base">
            6. What could we improve?
          </p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Optional — share any suggestions or comments..."
            rows={4}
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 resize-none"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered || submitting}
            className="px-8 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>

        {!allAnswered && (
          <p className="text-xs text-neutral-400 text-center">
            Please answer all 5 questions to submit your feedback.
          </p>
        )}
      </div>
    </main>
  );
}
