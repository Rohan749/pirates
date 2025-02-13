"use client"

import { useState } from "react";
import Hero from "../components/Hero";
import SplineImg from "../components/SplineImg";
import Spotlight from "../components/Spotlight";
import Header from "../components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

gsap.registerPlugin(useGSAP);


export default function Home() {

  const targetDate = new Date('2025-03-31T23:59:59').getTime();
  const [loading, setLoading] = useState(true)

  const handleSplineLoad = () => {
    setLoading(false)

  }

  return (
    <div className="overflow-x-hidden">
        <Header loading={loading} />
      <Hero targetDate={targetDate} loading={loading} />
      <SplineImg loading={loading} handleSplineLoad={handleSplineLoad} />
      <Spotlight loading={loading} />
    </div>
  );
}
