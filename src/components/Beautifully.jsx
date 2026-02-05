import React from "react";
import icon16 from "../assets/16.2 icon.webp";
import icon1200 from "../assets/1200 1 C R.webp";
import sRGB from "../assets/sRGB icon.webp";
import wide from "../assets/wide color gamut detail 1.webp";

const Beautifully = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[32px] text-[#78797F] ">
        Wide Color Gamut Range
      </h1>
      <h1 className="font-bold text-[48px] text-[#373636] ">
        Bringing Color to Life, Beautifully
      </h1>
      <p className="mt-6 mb-16 max-w-325 text-[24px] text-[#353434] text-center">
        Featuring an advanced 8-bit panel capable of displaying 16.2 million
        colors, the Lumina 15F produces rich, vibrant visuals with impressive
        color accuracy. Its wide color gamut covering 92% sRGB, 75% NTSC, 77%
        AdobeRGB, and 79% DCI-P3 ensures consistent, true-to-life color
        reproduction across every scene. From precise creative work and
        immersive content consumption to smooth everyday productivity. Lumina
        15F delivers clarity, depth, and confidence in every pixel.
      </p>
<div className="flex justify-between gap-40">
  <div className=" flex flex-col items-center justify-center text-center">
    <img src={icon16} alt="" className="mb-3" />
    <h3 className="flex gap-10 justify-center text-[24px] text-[#4A4A4A] font-semibold">
      16.2 million colors
    </h3>
    <p className="mt-2 text-[16px] text-[#3F3F3F]">
      Faithful color expression
    </p>
  </div>

  <div className=" flex flex-col items-center justify-center text-center">
    <img src={icon1200} alt="" className="mb-3" />
    <h3 className="flex gap-10 justify-center text-[24px] text-[#4A4A4A] font-semibold">
      1200:1
    </h3>
    <p className="mt-2 text-[16px] text-[#3F3F3F]">
      Contrast Ratio
    </p>
  </div>

  <div className=" flex flex-col items-center justify-center text-center">
    <img src={sRGB} alt="sRGB Icon" className="mb-3" />
    <h3 className="flex gap-10 justify-center text-[24px] text-[#4A4A4A] font-semibold">
      <span>92% sRGB</span>
      <span>79% P3</span>
    </h3>
    <p className="mt-2 text-[16px] text-[#3F3F3F]">
      Wide, accurate color range
    </p>
  </div>
</div>
<img src={wide} alt="" className="w-full h-full"/>
    </div>
  );
};

export default Beautifully;
