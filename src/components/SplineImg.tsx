
import gsap from "gsap"
import Spline from '@splinetool/react-spline'
import React, { useEffect } from 'react'

interface splineImgInterface {
  handleSplineLoad: () => void;
  loading: boolean;
}


const SplineImg = ({handleSplineLoad, loading}:splineImgInterface) => {

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

    

  return (
    <div className='w-full overflow-y-hidden'>
      <Spline onLoad={handleSplineLoad} scene='https://prod.spline.design/L2Q7hU0gZW56K3AA/scene.splinecode' className='spline-section min-h-[100vh] 2xl:min-h-[60vh] opacity-[0]'   />
    {/* <iframe className='outline h-[100vh] opacity-[0.6] md:opacity-[0.9]' src='https://my.spline.design/piratescardspline1-faeb78542e863cce4c76577f322764a7/'  width='100%' height='200%'></iframe> */}
  </div>
  )
}

export default SplineImg