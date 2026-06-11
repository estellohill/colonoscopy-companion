"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { loadPlan, savePlan, clearPlan, type ProcedurePlan } from "@/lib/plan";
import { trackEvent } from "@/lib/analytics";

interface PlanContextType {
  plan: ProcedurePlan | null;
  /** False until localStorage has been read (avoids hydration flash). */
  ready: boolean;
  setPlan: (plan: ProcedurePlan) => void;
  removePlan: () => void;
}

const PlanContext = createContext<PlanContextType>({
  plan: null,
  ready: false,
  setPlan: () => {},
  removePlan: () => {},
});

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlanState] = useState<ProcedurePlan | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlanState(loadPlan());
    setReady(true);
  }, []);

  const setPlan = (next: ProcedurePlan) => {
    setPlanState(next);
    savePlan(next);
    trackEvent("plan_saved", {
      has_time: next.time ? 1 : 0,
      prep_type: next.prepType || "none",
    });
  };

  const removePlan = () => {
    setPlanState(null);
    clearPlan();
    trackEvent("plan_cleared");
  };

  return (
    <PlanContext.Provider value={{ plan, ready, setPlan, removePlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
