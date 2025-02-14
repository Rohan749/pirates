"use client"

import { useGSAP } from '@gsap/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import gsap from "gsap"
import { NumFormatter } from '@/utils/utils'

interface countInterface {
    targetDate: number,
    loading: boolean
}
const CountDown = React.memo(({ targetDate }: countInterface) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    const [mintNow, setMintNow] = useState(false);
  
    const timeLeftRef = useRef(timeLeft); 
    const mintNowRef = useRef(mintNow); 
  
    useGSAP(() => {
      gsap.to('.mintNow', {
        opacity:  1,
        duration: 1,
      });

      gsap.to(".countdown", {
        opacity: 1,
        duration: 2,
        delay: 3
      })
    });
  
    const formattedTime = useCallback((time: number) => NumFormatter(time), []);
  
    useEffect(() => {
      timeLeftRef.current = timeLeft;
  
      const calculateTimeLeft = () => {
        const currentTime = new Date().getTime();
        const timeDifference = targetDate - currentTime;
  
        if (timeDifference <= 0) {
          if (!mintNowRef.current) { 
            setMintNow(true);
            mintNowRef.current = true; 
          }
          return; 
        }
  
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
      };
  
      const timeoutId = setTimeout(function update() {
        calculateTimeLeft();
        setTimeout(update, 1000); 
      }, 1000);
  
      return () => clearTimeout(timeoutId);
    }, [targetDate, timeLeft]); 
  
    return (
      <div className="countdown flex h-full justify-between gap-5 w-full pt-44 2xl:pt-64 opacity-0">
        <div className="flex flex-col justify-center items-center gap-10 w-[25%]">
          <div className="text-5xl lg:text-10xl">{formattedTime(timeLeft.days)}</div>
          <div>Days</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-[25%]">
          <div className="text-5xl lg:text-10xl">{formattedTime(timeLeft.hours)}</div>
          <div>Hours</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-[25%]">
          <div className="text-5xl lg:text-10xl">{formattedTime(timeLeft.minutes)}</div>
          <div>Minutes</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-[25%]">
          <div className="text-5xl lg:text-10xl">{formattedTime(timeLeft.seconds)}</div>
          <div>Seconds</div>
        </div>
        {mintNow && (
          <div className="mintNow" style={{ opacity: 0, transition: 'opacity 1s' }}>
            Mint Now
          </div>
        )}
      </div>
    );
  });
  
  export default CountDown;