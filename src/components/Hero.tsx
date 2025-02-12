"use client";
import { NumFormatter } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import baseLight from "../assets/images/baselight.svg";
import Image from "next/image";
import Link from "next/link";

interface heroProps {
  targetDate: number;
}

const Hero = ({ targetDate }: heroProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mintNow, setMintNow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }

      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setMintNow(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate, timeLeft]);

  useEffect(() => {}, []);

  return (
    <section className="px-3 sm:px-5 lg:px-10 countdown text-xl h-[70vh] w-full">
      {mintNow && (
        <div className="flex h-full justify-between gap-5">
          <div className="flex flex-col justify-center items-center gap-20 w-[25%]">
            <div className="text-5xl lg:text-10xl">{NumFormatter(timeLeft.days)}</div>
            <div>Days</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-20  w-[25%]">
            <div className="text-5xl lg:text-10xl">{NumFormatter(timeLeft.hours)}</div>
            <div>Hours</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-20  w-[25%]">
            <div className="text-5xl lg:text-10xl">{NumFormatter(timeLeft.minutes)}</div>
            <div>Minutes</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-20  w-[25%]">
            <div className="text-5xl lg:text-10xl">{NumFormatter(timeLeft.seconds)}</div>
            <div>Seconds</div>
          </div>
        </div>
      )}
     <div className="absolute left-5 z-50 bottom-5 text-white text-xs flex gap-5">
        <Link href={"/mint"}>
         <span>Terms of Services</span>
        </Link>
        <Link href={"/mint"}>
         <span>Privacy Policy</span>
        </Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-50 bottom-16 lg:bottom-5">
        <Link href={"/mint"}>
          <button className="btn text-sm ">
            {!mintNow ? <span>Mint Now!</span> : <span>Wen mint?</span>}
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image src={baseLight} alt="" />
      </div>
    </section>
  );
};

export default Hero;
