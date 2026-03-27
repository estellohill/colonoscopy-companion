/* eslint-disable @typescript-eslint/no-explicit-any */
import data from "./sections.json";

// The JSON has heterogeneous section content shapes.
// We export a typed accessor so pages can pull what they need without fighting TS.
export const hero = data.hero;
export const sections = data.sections as Array<{
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  summary: string;
  content: any;
}>;

export function getSection(id: string) {
  return sections.find((s) => s.id === id)!;
}
