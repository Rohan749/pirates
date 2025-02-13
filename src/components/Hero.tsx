"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import logo from "../assets/images/logo.svg"
import Countdown from "./Countdown";

interface heroProps {
  targetDate: number;
  loading: boolean;
}

const Hero = ({ targetDate, loading }: heroProps) => {

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
    <div className="loading-screen absolute h-[100vh] w-full bg-black z-50 top-0 flex items-center justify-center">
      <Image className="logo opacity-0" src={logo} alt="PIRATES" />
    </div>
    <section className="px-3 sm:px-5 lg:px-10 countdown text-xl h-[70vh] w-full overflow-x-hidden">
     <Countdown targetDate={targetDate} loading={loading} />
     <div className="absolute left-3 sm:left-5 lg:left-10 z-40 bottom-5 text-white text-xs flex gap-5">
        <Link href={"/mint"}>
         <span>Terms of Services</span>
        </Link>
        <Link href={"/mint"}>
         <span>Privacy Policy</span>
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-40 bottom-16 lg:bottom-5">
        <Link href={"/mint"}>
          <button className="btn text-sm ">
             <span>Mint Now!</span> 
            
          </button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Hero;
