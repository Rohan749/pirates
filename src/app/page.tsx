"use client";

import { useEffect, useState } from "react";
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

// const containerRef = useRef<HTMLDivElement>(null);

  const handleSplineLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 })
    const targets = gsap.utils.toArray(".ball");
   


    window.addEventListener("mousemove", (e) => {

      const fadeThresholdY = 150;
      // const fadeThresholdRight = 100;
      // const fadeThresholdLeft = -100;
      const opacity = e.clientY < fadeThresholdY ? 0 : 1; // Fade out when near top
      gsap.to(targets, {
        duration: 0.9,
        x: e.clientX,
        y: e.clientY,
        opacity: opacity,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 2,
      });
    });
  }, 
[]
);

  return (
    <div className="overflow-x-hidden h-full">

      {/* <div className="ball w-4 z-30 h-4 absolute -top-5 -left-5 rounded-full cursor-none">
      <Link href={"/mint"}>
          <button className="btn text-sm w-[8rem]">
             <span>WEN MINT?</span> 
            
          </button>
        </Link>
      </div>       */}
      <div className="w-full fixed z-40">
      <Header loading={loading} />
      </div>
      <Hero targetDate={targetDate} loading={loading} />
      <div className="absolute top-0 h-full z-10 w-full">
      <SplineImg loading={loading} handleSplineLoad={handleSplineLoad} />
      </div>
      <div className="top-0 left-1/2 -translate-x-1/2 absolute h-full w-full">
      <Spotlight loading={loading} />
      </div>
    <CountDown targetDate={targetDate} loading={loading} />
    </div>
  );
}
