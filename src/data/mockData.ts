import { RouteOption, SafePlace } from "../types";

export const MUMBAI_CENTER: [number, number] = [19.076, 72.8777];

export const routes: RouteOption[] = [
  {
    id: "safe",
    kind: "Safest Route",
    distance: "4.8 km",
    duration: "19 min",
    score: 92,
    lighting: "High",
    emergency: "4 facilities nearby",
    transit: "Excellent",
    incidents: "Low concern",
    note: "More consistently lit streets with strong access to public facilities.",
    coords: [[19.076,72.8777],[19.079,72.882],[19.081,72.889],[19.084,72.894],[19.088,72.899]]
  },
  {
    id: "balanced",
    kind: "Balanced Route",
    distance: "4.2 km",
    duration: "16 min",
    score: 84,
    lighting: "Good",
    emergency: "3 facilities nearby",
    transit: "Good",
    incidents: "Low concern",
    note: "Good compromise between travel time, lighting and facility coverage.",
    coords: [[19.076,72.8777],[19.073,72.883],[19.078,72.888],[19.083,72.891],[19.088,72.899]]
  },
  {
    id: "fast",
    kind: "Fastest Route",
    distance: "3.7 km",
    duration: "13 min",
    score: 72,
    lighting: "Mixed",
    emergency: "2 facilities nearby",
    transit: "Good",
    incidents: "Moderate concern",
    note: "Shortest travel time, with fewer safety-supporting features on some segments.",
    coords: [[19.076,72.8777],[19.071,72.881],[19.075,72.889],[19.081,72.895],[19.088,72.899]]
  }
];

export const safePlaces: SafePlace[] = [
  { id:"p1", name:"Central Police Help Desk", type:"Police", distance:"0.8 km", verified:true, coords:[19.078,72.884] },
  { id:"p2", name:"CityCare Emergency Hospital", type:"Hospital", distance:"1.1 km", verified:true, coords:[19.083,72.892] },
  { id:"p3", name:"Civic Fire Station", type:"Fire", distance:"1.4 km", verified:true, coords:[19.073,72.888] },
  { id:"p4", name:"Metro Station", type:"Transit", distance:"0.5 km", verified:true, coords:[19.081,72.889] },
  { id:"p5", name:"Well-lit Civic Plaza", type:"Public Space", distance:"0.7 km", verified:true, coords:[19.079,72.891] }
];

export const alerts = [
  { title:"Safety trend update", text:"Aggregated evening incident levels are slightly lower than the previous 30-day baseline.", tone:"positive" },
  { title:"Route note", text:"Night mode increases the weight of lighting and emergency-facility coverage.", tone:"neutral" },
  { title:"Data freshness", text:"Demo safety layers use synthetic/aggregated data and are not live incident feeds.", tone:"neutral" }
];