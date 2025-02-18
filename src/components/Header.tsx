"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/pirateslogo.svg";
import icon from "../assets/images/logo.svg";
import Link from "next/link";
import gsap from "gsap";
import ReactHowler from "react-howler";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";

interface headerInterface {
  loading?: boolean;
}

const Header = ({ loading }: headerInterface) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);

  const toggleAudio = () => {
    // if (audioRef.current && !playing) {
    //   audioRef.current.play();
    //   setPlaying(true)
    // }

    // else if (audioRef.current && playing) {
    //   audioRef.current.pause();
    //   setPlaying(false)
    // }

    if(playing) {
      setPlaying(false)
    }

    else {
      setPlaying(true)
    }
  }

  
  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        ".header",
        {
          y: -100,
        },
        {
          y: 0,
          delay: 2,
          opacity: 1,
          ease: "power1.out",
        }
      );
    }
  }, [loading]);

  useEffect(() => {
    audioRef.current?.play().catch(error => console.log("Autoplay blocked:", error));
  }, []);

  return (
    <header className="p-3 sm:p-5 lg:px-10 lg:p-10 header w-full opacity-0">
    
      <div className="flex items-center justify-between">
        <Link href={"/"} className="md:mr-[6rem]">
          <Image src={logo} alt="Pirates" className="md:block hidden" />
          <Image src={icon} alt="Pirates" className="md:hidden block" />
        </Link>
        {/* <div className='hidden md:block'>
        <Image src={pirates} alt='Pirates' />
        </div> */}
        <div className="flex items-center gap-4">
        <Link href={""}>
          <button className="btn text-xs min-w-[8rem]">
             <span>CONNECT WALLET</span> 
            
          </button>
        </Link>
          <span className="text-3xl text-[#C09D49] cursor-pointer hover:scale-[1.2] transition-all" onClick={toggleAudio}>
            {playing ? <MdOutlineMusicNote /> : <MdOutlineMusicOff />}
          </span>
        </div>
      </div>
      {/* <audio controls>
  <source src="https://drive.google.com/file/d/11fcS_N8KffmrB-gAlPP7ITVwPTK0aUAC/view" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio> */}
      <ReactHowler  playing={playing} src="/audio/audio.mp3"  rate={1}  loop={true} />
      {/* <audio ref={audioRef} src="/clock.mp3" /> */}
    </header>
  );
};

export default Header;
