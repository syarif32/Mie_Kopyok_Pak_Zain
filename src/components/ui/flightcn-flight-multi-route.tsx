"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  useId,
} from "react";
import { createPortal } from "react-dom";
import type * as MapLibreGLType from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
/*  NOTE: "maplibre-gl" touches `window`/`document` as soon as its     */
/*  module is evaluated. Next.js evaluates client-component modules    */
/*  on the server too (for the initial render), which crashes it.      */
/*  We therefore only ever `import("maplibre-gl")` dynamically, inside */
/*  useEffect, so the real module is never touched outside the browser.*/
/* ------------------------------------------------------------------ */

type LngLat = [number, number];
type MapLibreModule = typeof MapLibreGLType;

interface MapContextValue {
  map: MapLibreGLType.Map | null;
  maplibregl: MapLibreModule | null;
  loaded: boolean;
}

interface MapProps {
  theme?: "dark" | "light";
  center: LngLat;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  maxBounds?: [LngLat, LngLat];
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface FlightAirportProps {
  longitude: number;
  latitude: number;
  markerContent: React.ReactNode;
}

interface FlightAnimateOptions {
  duration?: number; // ms
  loop?: boolean;
  roundTrip?: boolean;
  delay?: number; // ms before animation starts
}

interface FlightMultiRouteProps {
  waypoints: LngLat[];
  color?: string;
  width?: number;
  opacity?: number;
  lineStyle?: "solid" | "dash";
  showAirports?: boolean;
  planeIconColor?: string;
  animate?: FlightAnimateOptions | false;
  followPlane?: boolean;
  onDestinationChange?: (index: number | null) => void;
  onComplete?: () => void;
  overview?: { center: LngLat; zoom: number };
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const MapContext = createContext<MapContextValue>({
  map: null,
  maplibregl: null,
  loaded: false,
});

const OSM_STYLE = {
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [{ id: "osm-tiles-layer", type: "raster", source: "osm-tiles" }],
} satisfies MapLibreGLType.StyleSpecification;

const STYLES: Record<"dark" | "light", MapLibreGLType.StyleSpecification> = {
  dark: OSM_STYLE,
  light: OSM_STYLE,
};

/* ------------------------------------------------------------------ */
/*  <Map />                                                             */
/* ------------------------------------------------------------------ */

export function Map({
  theme = "dark",
  center,
  zoom,
  minZoom,
  maxZoom,
  maxBounds,
  interactive = true,
  className,
  children,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreGLType.Map | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<MapLibreGLType.Map | null>(null);
  const [mlModule, setMlModule] = useState<MapLibreModule | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Dynamic import -> only ever runs in the browser.
      // maplibre-gl v5+ has no default export, so we use the module
      // namespace object directly (maplibregl.Map, maplibregl.Marker, ...).
      const maplibregl = await import("maplibre-gl");

      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: STYLES[theme],
        center,
        zoom,
        minZoom,
        maxZoom,
        maxBounds: maxBounds as MapLibreGLType.LngLatBoundsLike | undefined,
        attributionControl: {},
        dragRotate: interactive,
        dragPan: interactive,
        scrollZoom: interactive,
        boxZoom: interactive,
        doubleClickZoom: interactive,
        touchZoomRotate: interactive,
        keyboard: interactive,
      });

      mapRef.current = map;

      map.on("load", () => {
        if (cancelled) return;
        setLoaded(true);
        setMapInstance(map);
        setMlModule(() => maplibregl);
      });
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      setLoaded(false);
      setMapInstance(null);
      setMlModule(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ctxValue = useMemo<MapContextValue>(
    () => ({ map: mapInstance, maplibregl: mlModule, loaded }),
    [mapInstance, mlModule, loaded]
  );

  return (
    <div ref={containerRef} className={`relative h-full w-full ${className ?? ""}`}>
      <MapContext.Provider value={ctxValue}>
        {loaded ? children : null}
      </MapContext.Provider>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  <FlightAirport />  — arbitrary React marker at a lng/lat            */
/* ------------------------------------------------------------------ */

export function FlightAirport({ longitude, latitude, markerContent }: FlightAirportProps) {
  const { map, maplibregl, loaded } = useContext(MapContext);
  const markerRef = useRef<MapLibreGLType.Marker | null>(null);
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!map || !maplibregl || !loaded) return;

    const container = document.createElement("div");
    container.style.transform = "translate(0px, 0px)"; // avoid maplibre CSS quirks

    const marker = new maplibregl.Marker({ element: container, anchor: "center" })
      .setLngLat([longitude, latitude])
      .addTo(map);

    markerRef.current = marker;
    setEl(container);

    return () => {
      marker.remove();
      markerRef.current = null;
      setEl(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, maplibregl, loaded]);

  useEffect(() => {
    markerRef.current?.setLngLat([longitude, latitude]);
  }, [longitude, latitude]);

  if (!el) return null;
  return createPortal(markerContent, el);
}

/* ------------------------------------------------------------------ */
/*  Geo helpers                                                        */
/* ------------------------------------------------------------------ */

const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;

function haversineKm(a: LngLat, b: LngLat) {
  const R = 6371;
  const dLat = toRad(b[1] - a[1]);
  const dLng = toRad(b[0] - a[0]);
  const lat1 = toRad(a[1]);
  const lat2 = toRad(b[1]);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function bearing(a: LngLat, b: LngLat) {
  const lat1 = toRad(a[1]);
  const lat2 = toRad(b[1]);
  const dLng = toRad(b[0] - a[0]);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function pointAtDistance(
  waypoints: LngLat[],
  cumulative: number[],
  total: number,
  target: number
): { point: LngLat; heading: number } {
  const last = waypoints.length - 1;
  if (target <= 0) {
    return { point: waypoints[0], heading: bearing(waypoints[0], waypoints[1]) };
  }
  if (target >= total) {
    return {
      point: waypoints[last],
      heading: bearing(waypoints[last - 1], waypoints[last]),
    };
  }
  for (let i = 0; i < waypoints.length - 1; i++) {
    const segStart = cumulative[i];
    const segEnd = cumulative[i + 1];
    if (target <= segEnd) {
      const segLen = segEnd - segStart;
      const t = segLen === 0 ? 0 : (target - segStart) / segLen;
      const p0 = waypoints[i];
      const p1 = waypoints[i + 1];
      const point: LngLat = [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
      return { point, heading: bearing(p0, p1) };
    }
  }
  return { point: waypoints[last], heading: 0 };
}

/* ------------------------------------------------------------------ */
/*  <FlightMultiRoute />  — dashed line + optional animated plane       */
/* ------------------------------------------------------------------ */

export function FlightMultiRoute({
  waypoints,
  color = "#22c55e",
  width = 2,
  opacity = 0.8,
  lineStyle = "solid",
  showAirports = false,
  planeIconColor = "#ffffff",
  animate = false,
  followPlane = false,
  onDestinationChange,
  onComplete,
  overview,
}: FlightMultiRouteProps) {
  const { map, maplibregl, loaded } = useContext(MapContext);
  const uid = useId().replace(/:/g, "");
  const sourceId = `flightcn-route-${uid}`;
  const lineLayerId = `flightcn-route-line-${uid}`;
  const airportLayerId = `flightcn-route-airports-${uid}`;
  const planeMarkerRef = useRef<MapLibreGLType.Marker | null>(null);
  const rafRef = useRef<number | null>(null);
  const followPlaneRef = useRef(followPlane);
  const cameraRef = useRef<MapLibreGLType.JumpToOptions | null>(null);
  const callbacksRef = useRef({ onDestinationChange, onComplete });
  useEffect(() => {
    callbacksRef.current = { onDestinationChange, onComplete };
  }, [onDestinationChange, onComplete]);

  // Update camera mode independently so switching never restarts the flight.
  useEffect(() => {
    const wasFollowing = followPlaneRef.current;
    followPlaneRef.current = followPlane;
    if (!map || !loaded) return;

    if (followPlane && planeMarkerRef.current) {
      map.jumpTo(cameraRef.current ?? { center: planeMarkerRef.current.getLngLat(), zoom: 3.2 });
    } else if (wasFollowing && !followPlane && overview) {
      map.jumpTo({ center: overview.center, zoom: overview.zoom, padding: { top: 0, bottom: 0, left: 0, right: 0 } });
    }
  }, [map, loaded, followPlane, overview]);

  useEffect(() => {
    if (!map || !maplibregl || !loaded || waypoints.length < 2) return;

    // ---- draw the route line ----
    map.addSource(sourceId, {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: waypoints },
      },
    });

    map.addLayer({
      id: lineLayerId,
      type: "line",
      source: sourceId,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: {
        "line-color": color,
        "line-width": width,
        "line-opacity": opacity,
        ...(lineStyle === "dash" ? { "line-dasharray": [2, 2] } : {}),
      },
    });

    if (showAirports) {
      map.addLayer({
        id: airportLayerId,
        type: "circle",
        source: sourceId,
        paint: {
          "circle-radius": 4,
          "circle-color": color,
          "circle-opacity": opacity,
        },
      });
    }

    // ---- animated plane ----
    let cleanupAnim: (() => void) | null = null;

    if (animate) {
      const { duration = 8000, loop = false, roundTrip = false, delay = 0 } = animate;

      const distances: number[] = [];
      const cumulative: number[] = [0];
      for (let i = 0; i < waypoints.length - 1; i++) {
        const d = haversineKm(waypoints[i], waypoints[i + 1]);
        distances.push(d);
        cumulative.push(cumulative[i] + d);
      }
      const total = cumulative[cumulative.length - 1];

      const planeEl = document.createElement("div");
      planeEl.style.width = "20px";
      planeEl.style.height = "20px";
      planeEl.style.willChange = "transform";
      planeEl.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
          <path d="M12 2 L15 10 L22 13 L15 15 L14 22 L12 18 L10 22 L9 15 L2 13 L9 10 Z"
            fill="${planeIconColor}" stroke="${color}" stroke-width="0.5" />
        </svg>`;

      const marker = new maplibregl.Marker({ element: planeEl, anchor: "center" })
        .setLngLat(waypoints[0])
        .addTo(map);
      planeMarkerRef.current = marker;
      if (followPlaneRef.current) {
        map.jumpTo({ center: waypoints[0], zoom: 3.2 });
      }

      // Cache layout and SVG references outside the per-frame animation work.
      const planeSvg = planeEl.querySelector("svg")!;
      let containerHeight = map.getContainer().clientHeight;
      const updateHeight = () => { containerHeight = map.getContainer().clientHeight; };
      map.on("resize", updateHeight);

      const cycleDuration = roundTrip ? duration * 2 : duration;
      const startTime = performance.now() + delay;
      let stopped = false;
      let lastDestination: number | null = null;

      const tick = (now: number) => {
        if (stopped) return;
        const elapsed = now - startTime;

        if (elapsed < 0) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const finished = !loop && elapsed >= cycleDuration;
        const elapsedInCycle = loop ? elapsed % cycleDuration : Math.min(elapsed, cycleDuration);

        let t: number;
        if (roundTrip && elapsedInCycle > duration) {
          t = 1 - (elapsedInCycle - duration) / duration;
        } else {
          t = Math.min(elapsedInCycle / duration, 1);
        }

        const { point, heading } = pointAtDistance(waypoints, cumulative, total, t * total);
        marker.setLngLat(point);
        // Briefly frame each city using the actual flight progress, not separate timers.
        const flightTime = t * duration;
        let destination: number | null = null;
        let framing = 0;
        for (let i = 0; i < cumulative.length; i++) {
          const arrival = total > 0 ? (cumulative[i] / total) * duration : 0;
          const delta = flightTime - arrival;
          const finalStop = i === waypoints.length - 1;
          const strength = delta < 0
            ? Math.max(0, 1 + delta / 650)
            : finalStop ? 1 : Math.max(0, 1 - delta / 1100);
          if (strength > framing) {
            framing = strength;
            destination = i;
          }
        }
        framing = framing * framing * (3 - 2 * framing);
        if (destination !== lastDestination) {
          lastDestination = destination;
          callbacksRef.current.onDestinationChange?.(destination);
        }
        {
          const finalStop = destination === waypoints.length - 1;
          const city = destination === null ? point : waypoints[destination];
          const center: LngLat = [
            point[0] + (city[0] - point[0]) * framing,
            point[1] + (city[1] - point[1]) * framing,
          ];
          cameraRef.current = {
            center,
            zoom: 3.2 - framing * (finalStop ? 0.8 : 0.35),
            // Popup cards sit above their marker; reserve screen space above it.
            padding: { top: Math.min(finalStop ? 280 : 150, containerHeight - 100) * framing, bottom: 0, left: 0, right: 0 },
          };
          if (followPlaneRef.current) map.jumpTo(cameraRef.current);
        }
        planeEl.style.transform = `${planeEl.style.transform.replace(/rotate\([^)]*\)/, "")} rotate(${heading}deg)`;
        planeSvg.style.transform = `rotate(${heading}deg)`;

        if (finished) {
          callbacksRef.current.onComplete?.();
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);

      cleanupAnim = () => {
        stopped = true;
        map.off("resize", updateHeight);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        marker.remove();
        planeMarkerRef.current = null;
      };
    }

    return () => {
      cleanupAnim?.();
      if (map.getLayer(airportLayerId)) map.removeLayer(airportLayerId);
      if (map.getLayer(lineLayerId)) map.removeLayer(lineLayerId);
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, maplibregl, loaded, JSON.stringify(waypoints), color, width, opacity, lineStyle, showAirports, JSON.stringify(animate)]);

  return null;
}
