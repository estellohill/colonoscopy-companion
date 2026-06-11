# Colonoscopy Companion

Patient-education PWA for colonoscopy preparation, live at **[colonoscopycompanion.ca](https://colonoscopycompanion.ca)**. Mobile-first, built for adults 50–75. Subject of the COMPANION-VGH pre/post QI study — prep adequacy and patient comprehension are measured outcomes.

## Core UX model

Hybrid: a **date-anchored plan** is the spine, checklists are the leaves, and the educational content site is the fallback when no date is set.

- **No date set** → content-site mode: hero with "I have a procedure date" CTA, education sections, FAQ.
- **Date set** → plan mode: home (`/`) becomes the plan — countdown with real weekday + time, phase progress bar, "Today" tasks (max 3), coming-up events, calendar export, caregiver share. Education demotes to a "Learn" grid.
- **Date passed** → recovery mode: home points to `/recovery` (what's normal, red flags, tel: 811).

## Key surfaces

| Route | What it is |
|---|---|
| `/` | Plan-mode home (or content hero if no date set) |
| `/prep-day` | **Personalized split-dose schedule** — hour-by-hour dose cards computed back from procedure time + prep brand (PEG 4L / Bi-PegLyte / Pico-Salax), one-tap "Mark as done", NPO cutoff block, coping tips, BowelPrepScale |
| `/prep-instructions` | Full prep guide; phases date-stamped with the patient's real weekdays when a plan exists |
| `/recovery` | Post-procedure: normal symptoms, red flags, results timing, 811/911 |
| Other | what-is-colonoscopy, colon-cancer-polyps, screening-guidelines, what-to-expect (duration chips), comfort-and-anxiety, risks-and-safety, faq, for-physicians, feedback |

## Architecture

- **Next.js (App Router) + TypeScript + Tailwind v4**, static export, deployed on Vercel.
- **Plan engine:** [`src/lib/plan.ts`](src/lib/plan.ts) — plan storage (localStorage `companion-plan`, migrates legacy `procedure-date`), phase computation, per-brand split-dose schedule generation (dose 2 finishes 3–4 h pre-procedure; clear-fluid cutoff 3 h), `.ics` calendar export with VALARMs (the zero-permission reminder channel).
- **State:** `PlanProvider` ([`src/components/PlanContext.tsx`](src/components/PlanContext.tsx)) wraps the app; everything is client-side localStorage — no backend, no PHI leaves the device.
- **i18n:** 5 languages (en, zh-HK, zh-CN, pa, hi) in [`src/i18n/translations/`](src/i18n/translations/). `en.ts` is the canonical shape; the other four must mirror it structurally (TypeScript enforces this via `DeepString<typeof en>`). **Every new UI string must be added to all five files.** Non-English medical strings are AI-generated and pending certified review (the UI shows a disclaimer banner).
- **Icons:** drawn SVG set in [`src/components/Icons.tsx`](src/components/Icons.tsx) — no emoji in UI (inconsistent rendering, poor contrast for the 50–75 demographic).

## Accessibility floor (do not regress)

- 17px rem base (`html { font-size: 106.25% }`), instructional text ≥ `text-base`, generous `leading-relaxed`.
- Tap targets ≥ 44px (`min-h-12` on interactive rows/buttons); full-width "Done" buttons on dose cards.
- No `text-neutral-400` for meaningful text on white; no color-only state encoding; no gesture-only interactions.
- Real weekday date stamps ("Thursday, June 18") everywhere relative times appear.
- Grade 6–8 reading level; no undefined jargon (no "NPO", "split-dose" without plain-language framing).

## Clinical guardrails

Dose timings are the *typical* split-dose pattern. Every schedule surface carries the "your doctor's instruction sheet wins" notice — keep it when editing. Content cites CAG/BC Cancer guidance; medication changes always defer to the prescriber.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export — must pass before deploying
```

Deploy: Vercel (project linked in `.vercel/`).
