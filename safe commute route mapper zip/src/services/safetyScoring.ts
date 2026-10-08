import { TimeOfDay } from "../types";

/**
 * Demo scoring service.
 * Replace these inputs with normalized, aggregated API/model features later.
 *
 * Inspired by the uploaded project experiments:
 * - risk-weighted graph/pathfinding (Dijkstra)
 * - rule-based inference for safety explanations
 * - clustering for area-level trends
 *
 * Never pass victim-level or exact sensitive incident records to the UI.
 */
export function adjustSafetyScore(base: number, time: TimeOfDay): number {
  const adjustment: Record<TimeOfDay, number> = {
    Morning: 2,
    Afternoon: 3,
    Evening: -3,
    Night: -8,
  };
  return Math.max(0, Math.min(100, base + adjustment[time]));
}

export function scoreLabel(score: number) {
  if (score >= 85) return "Low concern";
  if (score >= 70) return "Moderate concern";
  return "Higher concern";
}

export function scoreFactors(score: number, time: TimeOfDay) {
  const night = time === "Night" || time === "Evening";
  return [
    { label: "Reported incident density", value: score >= 85 ? "Low" : score >= 70 ? "Moderate" : "Higher" },
    { label: "Street lighting", value: night ? "Weighted strongly" : "Good" },
    { label: "Emergency facility access", value: score >= 84 ? "Strong" : "Available" },
    { label: "Public transport coverage", value: score >= 80 ? "Good" : "Moderate" },
    { label: "Time-of-day factor", value: night ? "Higher weight" : "Standard weight" },
  ];
}