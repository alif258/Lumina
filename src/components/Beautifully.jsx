import React from "react";
import icon16 from "../assets/16.2 icon.webp";
import icon1200 from "../assets/1200 1 C R.webp";
import sRGB from "../assets/sRGB icon.webp";
import wide from "../assets/wide color gamut detail 1.webp";
import mblLaptop from "../assets/mblLaptop.png";

const Beautifully = () => {
  return (
    <>
      <div className="flex flex-col items-center px-6 md:px-10 lg:px-0 xl:px-0 max-w-[1600px] mx-auto">
        
        <h5 className="font-bold text-[20px] md:text-[32px] lg:text-[28px] xl:text-[32px] text-[#78797F] text-center">
          Wide Color Gamut Range
        </h5>
        <h1 className="font-bold text-[28px] md:text-[48px] lg:text-[42px] xl:text-[48px] text-[#373636] text-center leading-tight">
          Bringing Color to Life, Beautifully
        </h1>
        
        <p className="mt-4 md:mt-6 mb-10 md:mb-16 lg:mb-8 xl:mb-16 max-w-355 text-[16px] md:text-[24px] lg:text-[20px] xl:text-[24px] text-[#353434] text-center leading-relaxed">
          Featuring an advanced 8-bit panel capable of displaying 16.2 million colors, the Lumina 15F produces rich, vibrant visuals with impressive color accuracy. Its wide color gamut covering 92% sRGB, 75% NTSC, 77% AdobeRGB, and 79% DCI-P3 ensures consistent, true-to-life color reproduction across every scene. From precise creative work and immersive content consumption to smooth everyday productivity. Lumina 15F delivers clarity, depth & confidence in every pixel.
        </p>

      
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-x-5 md:gap-x-16 lg:gap-x-12 xl:gap-x-20 gap-y-10 mb-10 md:mb-20 lg:mb-12 xl:mb-20 w-full">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center w-[45%] md:flex-1">
            <img src={icon16} alt="" className="mb-3 w-10 md:w-16 lg:w-12 xl:w-auto" />
            <h3 className="text-[16px] md:text-[22px] lg:text-[18px] xl:text-[24px] text-[#4A4A4A] font-semibold leading-tight">
              16.2 million colors
            </h3>
            <p className="mt-1 md:mt-2 text-[13px] md:text-[16px] text-[#3F3F3F]">
              Faithful color expression
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center w-[45%] md:flex-1">
            <img src={icon1200} alt="" className="mb-3 w-10 md:w-16 lg:w-12 xl:w-auto" />
            <h3 className="text-[16px] md:text-[22px] lg:text-[18px] xl:text-[24px] text-[#4A4A4A] font-semibold leading-tight">
              1200:1
            </h3>
            <p className="mt-1 md:mt-2 text-[13px] md:text-[16px] text-[#3F3F3F]">
              Contrast Ratio
            </p>
          </div>

          {/* Item 3  */}
          <div className="flex flex-col items-center text-center w-full md:flex-1">
            <img src={sRGB} alt="sRGB Icon" className="mb-3 w-10 md:w-16 lg:w-12 xl:w-auto" />
            <h3 className="flex gap-3 justify-center text-[16px] md:text-[22px] lg:text-[18px] xl:text-[24px] text-[#4A4A4A] font-semibold leading-tight">
              <span>92% sRGB</span>
              <span>79% P3</span>
            </h3>
            <p className="mt-1 md:mt-2 text-[13px] md:text-[16px] text-[#3F3F3F]">
              Wide, accurate color range
            </p>
          </div>

        </div>
      </div>

      <img src={wide} alt="" className="w-full h-auto hidden md:block" />
      <img src={mblLaptop} alt="" className="w-full h-auto md:hidden" />
    </>
  );
};

export default Beautifully;