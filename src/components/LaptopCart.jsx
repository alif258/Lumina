import React from 'react'
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import FullHD from "../assets/full HD 2.webp";
import Dual from "../assets/Dual 2W Stereo Speakers.webp";
import truecolor from "../assets/truecolor 1.png";
import low from "../assets/low blue light icon 1.png";
import full from "../assets/full HD 2.png";


const LaptopCart = () => {
  return (
    <>
 <div className="px-6 md:px-10 lg:px-0">
   <div className='bg-[#E8ECF9] rounded-2xl p-6 pb-0 max-w-355 m-auto mt-16 flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:gap-12'>
    <div className="text gradient-bg box-4 mb-6 rounded-2xl py-12 md:py-16 lg:py-24 px-8 md:px-10 lg:px-13 w-full md:w-[50%]">
      <h1 className='text-[28px] md:text-[30px] lg:text-[32px] text-[#303031] font-bold mb-4.5'>Immersive Full HD</h1>
      <p className='text-[18px] md:text-[20px] lg:text-[24px] text-[#292C30] leading-relaxed'>
        The Qbits Lumina 15F integrates a 15.6-inch Full HD (1920 × 1080) IPS panel designed for visual stability and consistency. With a 178° viewing angle, details remain sharp, colors stay balanced and brightness is evenly maintained across the screen, even when viewed from off-center positions.
      </p>
    </div>

    <div className="img w-full md:w-[50%] flex flex-col md:justify-center lg:justify-between items-center">
      <div className="icon flex flex-wrap justify-center gap-5 md:gap-5 lg:gap-6 md:mt-6 lg:mt-10">
        <div className="fullhd bg-[#EAEDFA] py-2 md:py-2.5 lg:py-3 px-3 md:px-4 lg:px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
          <img src={Ellipse1} alt="" className="w-4 h-4 md:w-auto md:h-auto" />
          <p className='text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#303031]'>Full HD</p>
        </div>
        <div className="bg-[#EAEDFA] py-2 md:py-2.5 lg:py-3 px-3 md:px-4 lg:px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
          <img src={Ellipse2} alt="" className="w-4 h-4 md:w-auto md:h-auto" />
          <p className='text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#303031]'>1920 X 1080</p>
        </div>
        <div className="Viewing bg-[#EAEDFA] py-2 md:py-2.5 lg:py-3 px-3 md:px-4 lg:px-4.5 rounded-2xl flex items-center gap-2 border border-[#D1D5F6]">
          <img src={Ellipse3} alt="" className="w-4 h-4 md:w-auto md:h-auto" />
          <p className='text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#303031]'>178° Viewing Angle</p>
        </div>
      </div>
      <div className="img w-full mt-6 md:mt-4 lg:mt-0 flex md:justify-center lg:justify-start items-end">
        <img src={FullHD} alt="Full HD Display" className="w-full h-auto object-contain object-bottom hidden lg:block" />
        <img src={full} alt="Full HD Display" className="w-full h-auto object-contain md:object-center lg:object-bottom lg:hidden" />
      </div>
    </div>
  </div>

  <div className='bg-[#E8ECF9] rounded-3xl p-6 max-w-355 m-auto mt-16 flex flex-col-reverse md:flex-row items-center justify-between gap-7 md:gap-6 lg:gap-7'>
    <div className="img w-full md:w-[50%] flex justify-center items-center">
      <img src={Dual} alt="Dual Speakers" className="w-full h-auto object-contain" />
    </div>
    <div className="text gradient-bg box-3 rounded-3xl py-12 md:py-16 lg:py-24 px-8 md:px-10 lg:px-13 w-full md:w-[50%] flex flex-col justify-center">
      <h1 className='text-[28px] md:text-[30px] lg:text-[32px] text-[#303031] font-bold mb-4 md:mb-[16px] lg:mb-[18px]'>
        Dual 2W Stereo Speakers
      </h1>
      <p className='text-[18px] md:text-[20px] lg:text-[24px] text-[#292C30] leading-relaxed'>
        Produce bold, articulate bass and minimize distortion. Carefully tuned to reproduce clean mids and audible highs for voices and media. Altogether, this speaker system is designed to provide reliable, consistent audio for work, and casual entertainment on the go. The built-in 3.5 mm audio jack lets you connect headphones or external speakers for clear, uninterrupted audio. No distractions. No background noise. Just focused on sound for media, and work.</p>
    </div>
  </div>

 </div>
  <div className="m-auto max-w-355 mt-16 flex gap-10 md:gap-12 lg:gap-15 justify-between flex-col md:flex-row px-6 md:px-10 lg:px-0">
    <div className="left gradient-bg box-2 rounded-2xl w-full py-10 md:py-14 lg:py-20 px-6 md:px-10 lg:px-14">
      <div className="flex items-center gap-4 md:gap-3 lg:gap-2">
        <div className="img shrink-0">
          <img src={low} alt="Low Blue Light" className="w-10 md:w-auto" />
        </div>
        <div className="text flex flex-col">
          <h3 className='text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#010101]'>Low Blue Light Mode</h3>
          <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#4E4D4D]'>Comfortable viewing for long hours</p>
        </div>
      </div>
      <p className='mt-6 md:mt-7 lg:mt-9 text-[16px] md:text-[20px] lg:text-[24px] text-[#4E4D4D]'>
        Low Blue Light Mode helps protect your eyes and keeps viewing comfortable, even after extended use.
      </p>
    </div>

    <div className="Right gradient-bg box-1 rounded-2xl w-full py-10 md:py-14 lg:py-20 px-6 md:px-10 lg:px-14">
      <div className="flex items-center gap-4 md:gap-3 lg:gap-2">
        <div className="img shrink-0">
          <img src={truecolor} alt="True Color" className="w-10 md:w-auto" />
        </div>
        <div className="text flex flex-col">
          <h3 className='text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#010101]'>True Color Display</h3>
          <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#4E4D4D]'>Enjoy precise color accuracy</p>
        </div>
      </div>
      <p className='mt-6 md:mt-7 lg:mt-9 text-[16px] md:text-[20px] lg:text-[24px] text-[#4E4D4D]'>
        True Color Display ensures consistent and natural colors wherever you work or play.
      </p>
    </div>
  </div>
</>
    
  )
}

export default LaptopCart