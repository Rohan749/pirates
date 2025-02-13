"use client"
import Mint from "../../components/Mint";
import Image from "next/image";
import bg from "../../assets/images/background.svg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import Header from "@/components/Header";
import { useState } from "react";


gsap.registerPlugin(useGSAP);

export default function Home() {
   const [loading] = useState(false)



  return (
    <>
    <Header loading={loading} />
     <Mint />
     <div className=" w-full h-full overflow-y-hidden z-20">
      <Image src={bg} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[110vh] overflow-y-hidden"  />
     </div>
    </>
  );
}
