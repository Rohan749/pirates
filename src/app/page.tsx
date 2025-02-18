"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SplineImg from "../components/SplineImg";
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

      // const fadeThresholdY = 150;
      // const fadeThresholdRight = 100;
      // const fadeThresholdLeft = -100;
      
      gsap.to(targets, {
        // duration: 0.9,
        x: e.clientX,
        y: e.clientY,
        // opacity: opacity,
        // ease: "power1.out",
        overwrite: "auto",
        // stagger: 2,
      });
    });
  }, 
[]
);


  return (
    <div className="overflow-x-hidden h-full">

      {/* <div className="ball w-10 z-30 h-10 absolute -top-0 -left-0 rounded-full cursor-dis">
          <Image src={cursor} alt="" height={500} width={500} />
      </div>       */}
      <div className="w-full fixed z-50">
      <Header loading={loading} />
      </div>
      <Hero targetDate={targetDate} loading={loading} />
      <div className="absolute top-0 h-full z-10 w-full ">
      <SplineImg loading={loading} handleSplineLoad={handleSplineLoad} />
      </div>
      {/* <div className="top-0 left-1/2 -translate-x-1/2 absolute h-full w-full">
      <Spotlight loading={loading} />
      </div> */}
      <div className="absolute z-40 w-full">
    <CountDown targetDate={targetDate} loading={loading} />
    </div>
    </div>
  );
}
