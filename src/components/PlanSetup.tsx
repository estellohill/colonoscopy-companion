"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePlan } from "@/components/PlanContext";
import { PREP_TYPES, type PrepType } from "@/lib/plan";
import { Icon, type IconName } from "@/components/Icons";

const PREP_ICONS: Record<PrepType, IconName> = {
  peg4l: "jug",
  bipeglyte: "pill",
  picosalax: "sachet",
  unsure: "question",
};

export default function PlanSetup({ onDone }: { onDone?: () => void }) {
  const { t } = useLanguage();
  const { plan, setPlan, removePlan } = usePlan();
  const s = t.ui.plan.setup;
  const prepTypes = t.ui.plan.prepTypes as Record<
    PrepType,
    { name: string; examples: string; detail: string }
  >;

  const [date, setDate] = useState(plan?.date || "");
  const [time, setTime] = useState(plan?.time || "");
  const [noTime, setNoTime] = useState(plan ? !plan.time : false);
  const [prepType, setPrepType] = useState<PrepType | null>(plan?.prepType || null);

  const today = new Date().toISOString().split("T")[0];
  const canSave = !!date;

  const save = () => {
    if (!canSave) return;
    setPlan({ date, time: noTime || !time ? null : time, prepType });
    onDone?.();
  };

  const clear = () => {
    if (window.confirm(s.clearConfirm)) {
      removePlan();
      onDone?.();
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-7">
      <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-2">{s.heading}</h2>
      <p className="text-base text-neutral-600 mb-6 leading-relaxed">{s.subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="plan-date" className="block text-base font-semibold text-neutral-700 mb-1.5">
            {s.dateLabel}
          </label>
          <input
            id="plan-date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 min-h-12 text-base rounded-xl border border-neutral-300 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
        <div>
          <label htmlFor="plan-time" className="block text-base font-semibold text-neutral-700 mb-1.5">
            {s.timeLabel}
          </label>
          <input
            id="plan-time"
            type="time"
            value={time}
            disabled={noTime}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 min-h-12 text-base rounded-xl border border-neutral-300 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:bg-neutral-100 disabled:text-neutral-400"
          />
          <label className="flex items-center gap-2.5 mt-2 cursor-pointer p-1">
            <input
              type="checkbox"
              checked={noTime}
              onChange={(e) => setNoTime(e.target.checked)}
              className="w-5 h-5 rounded border-neutral-300 text-brand-600 focus:ring-brand-500"
            />
            <span className="text-base text-neutral-600">{s.timeUnknownLabel}</span>
          </label>
        </div>
      </div>
      {!noTime && <p className="text-base text-neutral-500 -mt-3 mb-6 leading-relaxed">{s.timeHint}</p>}

      <fieldset className="mb-6">
        <legend className="block text-base font-semibold text-neutral-700 mb-1">{s.prepLabel}</legend>
        <p className="text-base text-neutral-500 mb-3">{s.prepHint}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PREP_TYPES.map((type) => {
            const info = prepTypes[type];
            const selected = prepType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setPrepType(type)}
                aria-pressed={selected}
                className={`flex items-start gap-3 text-left p-4 rounded-xl border-2 transition-colors min-h-12 ${
                  selected
                    ? "border-brand-600 bg-brand-50"
                    : "border-neutral-200 bg-white hover:border-brand-300"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                    selected ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <Icon name={PREP_ICONS[type]} className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-semibold text-base text-neutral-800">{info.name}</span>
                  {info.examples && (
                    <span className="block text-sm text-neutral-500 mt-0.5">{info.examples}</span>
                  )}
                  <span className="block text-base text-neutral-600 mt-1 leading-snug">{info.detail}</span>
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={save}
          disabled={!canSave}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3.5 min-h-12 rounded-xl font-semibold text-base hover:bg-brand-700 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed"
        >
          <Icon name="calendarCheck" className="w-5 h-5" />
          {plan ? s.update : s.save}
        </button>
        {onDone && (
          <button
            onClick={onDone}
            className="px-6 py-3.5 min-h-12 text-base text-neutral-600 hover:bg-neutral-100 rounded-xl font-medium transition-colors"
          >
            {s.cancel}
          </button>
        )}
        {plan && (
          <button
            onClick={clear}
            className="px-6 py-3.5 min-h-12 text-base text-restrict-600 hover:bg-restrict-50 rounded-xl font-medium transition-colors"
          >
            {s.clear}
          </button>
        )}
      </div>

      <p className="text-base text-neutral-500 mt-5 pt-4 border-t border-neutral-100 leading-relaxed">
        {s.disclaimer}
      </p>
    </div>
  );
}
