"use client"

import React, { useEffect } from 'react';
import gsap from "gsap"
import Image from 'next/image';
import baselight from "../assets/images/baselight.png"
import { useGSAP } from '@gsap/react';

interface spotlightInterface {
  loading: boolean;
}

const Spotlight = ({loading}:spotlightInterface) => {

  useEffect(() => {
   if(!loading){ gsap.fromTo(".spotlight", {
      opacity: 0,
      clipPath: "polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)"
    }, {
      opacity: 0.1,
      duration: 1.5,
      delay: 0.5,
      clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)"
    })
}
  }, [loading])

  useGSAP(() => {

    gsap.to(".baselight", {
      opacity: 1,
      duration: 1.5,
      delay: 0.9,
    })
  })

  return (
    <div className='lighting flex flex-col justify-start items-center h-full '>
   <Image src={baselight} alt='' height={900} className='baselight  w-fit opacity-[0] overflow-y-hidden h-full'/>
   {/* <div className=" opacity-0 baselight  ">
        <Image className='' src={baselight} alt="" />
      </div> */}
   </div>
  );
};

export default Spotlight;