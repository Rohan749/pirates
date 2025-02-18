
import gsap from "gsap"
import Spline from '@splinetool/react-spline'
import React, { useEffect, useRef } from 'react'

interface splineImgInterface {
  handleSplineLoad: () => void;
  loading: boolean;
}


const SplineImg = ({handleSplineLoad, loading}:splineImgInterface) => {

  const counter = useRef(null)

    useEffect(() => {
     if(!loading){ gsap.fromTo(".spline-section", {
        y: 1000,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 1,
       ease: "power4.out"

      })
    }}, [loading])

    // const handleLoad = (spline:any) => {
    //   handleSplineLoad();

    //   const obj = spline.findObjectById('fd63f114-a576-4470-82ce-072559d5d6f8');

    //   counter.current = obj;

    //   console.log(obj)
    // }

    

  return (
    <div className='w-full overflow-y-hidden h-full'>
      <Spline onLoad={handleSplineLoad} scene='https://prod.spline.design/0UeEiFZAfdRdbQwY/scene.splinecode' className='spline-section min-h-[100vh] 2xl:min-h-[70vh] opacity-[0]'   />
    {/* <iframe className='outline h-[100vh] opacity-[0.6] md:opacity-[0.9]' src='https://my.spline.design/piratescardspline1-faeb78542e863cce4c76577f322764a7/'  width='100%' height='200%'></iframe> */}
  </div>
  )
}

export default SplineImg