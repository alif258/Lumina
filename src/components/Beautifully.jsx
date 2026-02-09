import React from "react";
import icon16 from "../assets/16.2 icon.webp";
import icon1200 from "../assets/1200 1 C R.webp";
import sRGB from "../assets/sRGB icon.webp";
import wide from "../assets/wide color gamut detail 1.webp";
import mblLaptop from "../assets/mblLaptop.png";

const Beautifully = () => {
  return (
    <>
    <div className="flex flex-col items-center px-6 md:px-0 mt-6 md:mt-3">
      {/* Headings: মোবাইলে সাইজ কমানো হয়েছে */}
      <h5 className="font-bold text-[20px] md:text-[32px] text-[#78797F] text-center">
        Wide Color Gamut Range
      </h5>
      <h1 className="font-bold text-[28px] md:text-[48px] text-[#373636] text-center leading-tight">
        Bringing Color to Life, Beautifully
      </h1>
      
      {/* Description */}
      <p className="mt-4 md:mt-6 mb-10 md:mb-16 max-w-325 text-[16px] md:text-[24px] text-[#353434] text-center leading-relaxed  ">
        Featuring an advanced 8-bit panel capable of displaying 16.2 million colors, the Lumina 15F produces rich, vibrant visuals with impressive color accuracy. Its wide color gamut covering 92% sRGB, 75% NTSC, 77% AdobeRGB, and 79% DCI-P3 ensures consistent, true-to-life color reproduction across every scene. From precise creative work and immersive content consumption to smooth everyday productivity. Lumina 15F delivers clarity, depth & confidence in every pixel.
      </p>

      {/* Icons Section: মোবাইলে gap-40 এর বদলে gap-6 এবং flex-wrap ব্যবহার করা হয়েছে */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-40 mb-4 md:mb-20">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center justify-center text-center w-[45%] md:w-auto">
          <img src={icon16} alt="" className="mb-3 w-10 md:w-auto" />
          <h3 className="text-[18px] md:text-[24px] text-[#4A4A4A] font-semibold">
            16.2 million colors
          </h3>
          <p className="mt-1 md:mt-2 text-[14px] md:text-[16px] text-[#3F3F3F]">
            Faithful color expression
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center text-center w-[45%] md:w-auto">
          <img src={icon1200} alt="" className="mb-3 w-10 md:w-auto" />
          <h3 className="text-[18px] md:text-[24px] text-[#4A4A4A] font-semibold">
            1200:1
          </h3>
          <p className="mt-1 md:mt-2 text-[14px] md:text-[16px] text-[#3F3F3F]">
            Contrast Ratio
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center justify-center text-center w-full md:w-auto mt-4 md:mt-0">
          <img src={sRGB} alt="sRGB Icon" className="mb-3 w-10 md:w-auto" />
          <h3 className="flex gap-4 md:gap-10 justify-center text-[18px] md:text-[24px] text-[#4A4A4A] font-semibold">
            <span>92% sRGB</span>
            <span>79% P3</span>
          </h3>
          <p className="mt-1 md:mt-2 text-[14px] md:text-[16px] text-[#3F3F3F]">
            Wide, accurate color range
          </p>
        </div>
      </div>

      {/* Images */}
    </div>
      <img src={wide} alt="" className="w-full h-auto hidden md:block" />
      <img src={mblLaptop} alt="" className="w-full h-auto md:hidden" />
      </>
  );
};

export default Beautifully;