export type TravelMode = "Walking" | "Cycling" | "Public Transport" | "Car";
export type TimeOfDay = "Morning" | "Afternoon" | "Evening" | "Night";
export type RouteKind = "Safest Route" | "Balanced Route" | "Fastest Route";
export type Concern = "Low concern" | "Moderate concern" | "Higher concern";

export interface RouteOption {
  id: string;
  kind: RouteKind;
  distance: string;
  duration: string;
  score: number;
  lighting: string;
  emergency: string;
  transit: string;
  incidents: Concern;
  note: string;
  coords: [number, number][];
}

export interface SafePlace {
  id: string;
  name: string;
  type: "Police" | "Hospital" | "Fire" | "Transit" | "Public Space";
  distance: string;
  verified: boolean;
  coords: [number, number];
}