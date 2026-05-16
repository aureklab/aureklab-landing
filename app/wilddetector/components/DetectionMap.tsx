"use client";
import { useEffect, useState } from "react";
import { collection, query, where, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import dynamic from "next/dynamic";

const MapContainer  = dynamic(() => import("react-leaflet").then(m => m.MapContainer),  { ssr: false });
const TileLayer     = dynamic(() => import("react-leaflet").then(m => m.TileLayer),     { ssr: false });
const Marker        = dynamic(() => import("react-leaflet").then(m => m.Marker),        { ssr: false });
const Popup         = dynamic(() => import("react-leaflet").then(m => m.Popup),         { ssr: false });

const EMOJI: Record<string, string> = {
  bee: "🐝", frog: "🐸", bird: "🦜", reptile: "🦎",
};

interface Detection {
  id: string;
  speciesId: string;
  speciesLabel: string;
  probability: number;
  latitude: number;
  longitude: number;
  timestampMs: number;
}

export default function DetectionMap() {
  const [detections, setDetections] = useState<Detection[]>([]);
  const [leafletReady, setLeafletReady] = useState(false);

  useEffect(() => {
    // Fix Leaflet default icon in Next.js
    import("leaflet").then(L => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setLeafletReady(true);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "detections"),
      where("isPublic", "==", true),
      where("latitude", "!=", null),
      orderBy("latitude"),
      orderBy("timestampMs", "desc"),
      limit(200)
    );
    return onSnapshot(q, snap => {
      setDetections(snap.docs.map(d => ({ id: d.id, ...d.data() } as Detection)));
    });
  }, []);

  if (!leafletReady) {
    return (
      <div className="w-full h-96 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500">
        Loading map…
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden">
      <MapContainer center={[4.5, -74]} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        {detections.map(d => (
          <Marker key={d.id} position={[d.latitude, d.longitude]}>
            <Popup>
              <strong>{EMOJI[d.speciesId] ?? "🔍"} {d.speciesLabel}</strong><br />
              {(d.probability * 100).toFixed(0)}% confidence<br />
              {new Date(d.timestampMs).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
