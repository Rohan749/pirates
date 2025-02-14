"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

interface heroProps {
  targetDate: number;
  loading: boolean;
}

const Hero = React.memo(({ targetDate, loading }: heroProps) => {

  useGSAP(() => {
    gsap.fromTo(".logo", {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.5,
      duration: 1,
      ease: "power1.in"
      
    })
  })

  useEffect(() => {
    if(!loading) {
      gsap.to(".loading-screen", {
        opacity: 0,
        visibility: "hidden",
        duration: 0.5
      })
    }
  }, [loading])

  // useEffect(() => {
  //   if(!mintNow && !loading) {
    
  //   }
  // }, [mintNow, loading])

  

  return (
    <>
    {/* <div className="loading-screen  bg-black flex items-center justify-center">
      <Image className="logo opacity-0" src={logo} alt="PIRATES" />
    </div> */}
    
    <section className="px-3 sm:px-5 lg:px-10 text-xl h-full w-full overflow-x-hidden">
     <div className="absolute left-3 sm:left-5 lg:left-10 z-40 bottom-5 text-white text-xs flex gap-5">
        <Link href={"/mint"}>
         <span>Terms of Services</span>
        </Link>
        <Link href={"/mint"}>
         <span>Privacy Policy</span>
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-40 bottom-16 lg:bottom-5">
       
      </div>
     
    </section>
    </>
  );
});

export default Hero;
