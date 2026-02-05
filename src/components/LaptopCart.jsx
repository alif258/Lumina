import React from 'react'
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import FullHD from "../assets/full HD 2.webp";
import Dual from "../assets/Dual 2W Stereo Speakers.webp";


const LaptopCart = () => {
  return (
    <>
    <div className='bg-[#E8ECF9] rounded-2xl p-6 max-w-355 m-auto mt-16 flex justify-between gap-12'>
      <div className="text  gradient-bg box-4 rounded-2xl py-24 px-13 w-[40%]">
        <h1 className='text-[32px] text-[#303031] font-bold mb-4.5'>Immersive Full HD</h1>
        <p className=' text-[24px] text-[#292C30] '>The Qbits Lumina 15F integrates a 15.6-inch Full HD (1920 × 1080) IPS panel designed for visual stability and consistency. With a 178° viewing angle, details remain sharp, colors stay balanced and brightness is evenly maintained across the screen, even when viewed from off-center positions.</p>
      </div>
      <div className="img  w-[60%] flex flex-col   ">
  <div className="icon flex justify-center  gap-6 mt-11">
    <div className="fullhd bg-[#EAEDFA] py-3 px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
        <img src={Ellipse1} alt="" />
        <p className='text-[16px] font-semibold text-[#303031]'>Full HD</p>
    </div>
    <div className="bg-[#EAEDFA] py-3 px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
        <img src={Ellipse2} alt="" />
        <p className='text-[16px] font-semibold text-[#303031]'>1920 X 1080</p>
    </div>
    <div className="Viewing bg-[#EAEDFA] py-3 px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
    <img src={Ellipse3} alt="" />
    <p className='text-[16px] font-semibold text-[#303031]'>178° Viewing Angle</p>
    </div>
  </div>
  <div className="img w-full mt-4">
    <img src={FullHD} alt="" />
  </div>
</div>
    </div>




<div className='bg-[#E8ECF9] rounded-3xl p-6 max-w-355 m-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-10'>
  
  {/* Image Section - Centered Vertically & Horizontally */}
  <div className="img w-full md:w-[50%] flex justify-center items-center">
    <img src={Dual} alt="Dual Speakers" className="w-full h-auto object-contain" />
  </div>

  {/* Text Section */}
  <div className="text gradient-bg box-3 rounded-3xl py-12 md:py-24 px-8 md:px-13 w-full md:w-[50%] flex flex-col justify-center">
    <h1 className='text-[28px] md:text-[32px] text-[#303031] font-bold mb-4 md:mb-[18px]'>
      Dual 2W Stereo Speakers
    </h1>
    <p className=' text-[18px] md:text-[24px] text-[#292C30] leading-relaxed'>
      Produce bold, articulate bass and minimize distortion. Carefully tuned to reproduce clean mids and audible highs for voices and media. Altogether, this speaker system is designed to provide reliable, consistent audio for work, and casual entertainment on the go. The built-in 3.5 mm audio jack lets you connect headphones or external speakers for clear, uninterrupted audio. No distractions. No background noise. Just focused on sound for media, and work.
    </p>
  </div>
</div>







<div className=""></div>



</>
  )
}

export default LaptopCart