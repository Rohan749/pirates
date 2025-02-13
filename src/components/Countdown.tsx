"use client"

import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { NumFormatter } from '@/utils/utils'

interface countInterface {
    targetDate: number,
    loading: boolean
}

const Countdown = ({targetDate}:countInterface) => {

    useGSAP(() => {
        gsap.to(".mintNow", 
            {
                opacity: 1
            }
        )
    })

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mintNow, setMintNow] = useState(false);

  console.log(mintNow)

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




//   useGSAP(() => {
//     gsap.fromTo(".mintNow", {
//       opacity: 0
//     }, {
//       opacity: 1,
//       duration: 0.5
//     })
//   })


  return (
    <div className="mintNow">

        <div className=" flex h-full justify-between gap-5 opacit-0">
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

      </div>
  )
}

export default Countdown