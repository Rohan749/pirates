"use client"

import React, { useEffect } from 'react';
import gsap from "gsap"
import Image from 'next/image';
import spotlight from "../assets/images/spotlight2.png"
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
      opacity: 0.8,
      duration: 1.5,
      delay: 0.9,
    })
  })

  return (
    <div className='lighting flex flex-col justify-start items-center  h-full'>
   <Image src={spotlight} alt='' className='baselight  h-full  overflow-y-hidden lg:w-fit opacity-[0]'/>
   {/* <div className=" opacity-0 baselight lg:mt-[-12rem] ">
        <Image className='' src={baseLight} alt="" />
      </div> */}
   </div>
  );
};

export default Spotlight;