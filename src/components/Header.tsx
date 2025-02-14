"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logo from "../assets/images/pirateslogo.svg"
import icon from "../assets/images/logo.svg"
import Button from './common/Button'
import Link from 'next/link'
import gsap from "gsap"
import ReactHowler from 'react-howler'



interface headerInterface {
  loading?: boolean
}

const Header = ({loading}: headerInterface) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
  if(!loading) { gsap.fromTo(".header", {
      y: -100
    }, 
    {
      y: 0,
      delay: 2,
      opacity: 1,
       ease: "power1.out"
    }
  )}
  }, [loading])

  return (
    <header className='p-3 sm:p-5 lg:px-10 lg:p-10 header w-full opacity-0'>
        <div className='flex items-center justify-between'>
        <Link href={"/"} className='md:mr-[6rem]'>
        <Image src={logo} alt='Pirates' className='md:block hidden' />
        <Image src={icon} alt='Pirates' className='md:hidden block' />
        </Link>
        {/* <div className='hidden md:block'>
        <Image src={pirates} alt='Pirates' />
        </div> */}
        <Button>Connect Wallet</Button>
        </div>
        {/* <audio controls>
  <source src="https://drive.google.com/file/d/11fcS_N8KffmrB-gAlPP7ITVwPTK0aUAC/view" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio> */}
  <ReactHowler
       src='/clock.mp3'
       playing={true}
       rate={1}
       loop={true}
      />

    </header>
  )
}

export default Header