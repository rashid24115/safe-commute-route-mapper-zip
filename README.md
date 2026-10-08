# SafeRoute – Safe Commute Route Mapper

A polished React + TypeScript + Tailwind CSS safety-focused navigation demo.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Included

- Responsive desktop/tablet/mobile layout
- Interactive OpenStreetMap/Leaflet map
- Safest / Balanced / Fastest route alternatives
- 0–100 safety scoring with time-of-day adjustment
- Aggregated safety heatmap
- Route comparison
- Emergency confirmation flow
- Share trip / I'm Safe demo controls
- Police, hospital, fire, transit and public-place markers
- Dark mode
- Dashboard view
- Modular service/data layer
- Privacy-oriented safety language
- Synthetic mock data for immediate demo use

## Real API integration points

### Map/routing
`src/components/MapView.tsx`

Replace the demo route polylines with a routing provider such as OSRM, GraphHopper, Mapbox Directions, or Google Maps Platform. Keep provider-specific code behind a service module.

### Safety scoring
`src/services/safetyScoring.ts`

Replace `adjustSafetyScore()` with a normalized scoring service. Suggested normalized inputs:

- aggregated incident density
- lighting coverage
- pedestrian/traffic activity
- distance to public emergency facilities
- public transport availability
- time-of-day historical factor

Keep exact victim locations, names, or other sensitive records out of the client.

### Safety trends / heatmap
Use a backend endpoint that returns area-level aggregates (for example grid cells, ward-level summaries, or privacy-preserving clusters). Do not expose raw incident records.

### Safe places
Replace `src/data/mockData.ts` with a verified places API or a curated backend source.

### Emergency features
The demo deliberately does not place calls automatically. Production behavior should require explicit confirmation and use the device/platform's supported emergency mechanisms.

## Project/academic mapping

The uploaded experiments suggest useful future modules:

- Dijkstra / risk-weighted pathfinding for safest-route optimization.
- BFS/DFS for graph traversal and route exploration.
- K-Means for area-level safety clustering/hotspot aggregation.
- Forward/backward chaining for explainable safety rules.
- Reinforcement learning as a future research extension.
- NLP/TF-IDF as a possible future pipeline for classifying public safety reports, subject to privacy and data-quality controls.

These are extension points, not claims that the demo is running those ML algorithms live.

## Folder structure

```text
SafeRoute/
├─ src/
│  ├─ components/
│  │  ├─ Dashboard.tsx
│  │  ├─ EmergencyPanel.tsx
│  │  ├─ MapView.tsx
│  │  ├─ NavigationHeader.tsx
│  │  ├─ RouteCard.tsx
│  │  ├─ RouteComparison.tsx
│  │  ├─ SafePlaces.tsx
│  │  ├─ SafetyAlerts.tsx
│  │  ├─ SafetyScore.tsx
│  │  └─ SearchBar.tsx
│  ├─ data/
│  │  └─ mockData.ts
│  ├─ services/
│  │  └─ safetyScoring.ts
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  └─ types.ts
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig*.json
├─ vite.config.ts
└─ README.md
```

## Safety/privacy note

This project is designed for crime prevention and personal safety. It intentionally uses aggregated safety indicators and avoids victim-level details. Safety scores are estimates and cannot guarantee personal safety.
