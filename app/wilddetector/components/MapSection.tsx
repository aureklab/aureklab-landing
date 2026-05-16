"use client";
import dynamic from "next/dynamic";

const DetectionMap = dynamic(() => import("./DetectionMap"), { ssr: false });

export default function MapSection() {
  return <DetectionMap />;
}
