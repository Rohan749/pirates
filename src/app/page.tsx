"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import SplineImg from "../components/SplineImg";
import Spotlight from "../components/Spotlight";
import Header from "../components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CountDown from "@/components/Countdown";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const targetDate = new Date("2025-03-31T23:59:59").getTime();
  const [loading, setLoading] = useState(true);

  const handleSplineLoad = () => {
    setLoading(false);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="w-full fixed z-50">
      <Header loading={loading} />
      </div>
      <Hero targetDate={targetDate} loading={loading} />
      <div className="absolute top-0 z-10 w-full">
      <SplineImg loading={loading} handleSplineLoad={handleSplineLoad} />
      </div>
      <div className="top-0 left-1/2 -translate-x-1/2 absolute h-full w-full">
      <Spotlight loading={loading} />
      </div>

    <CountDown targetDate={targetDate} loading={loading} />
    </div>
  );
}
