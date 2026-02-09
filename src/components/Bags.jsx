import React from "react";
// ১. ইমেজগুলো সরাসরি ইমপোর্ট করুন (এটিই ভার্সেলের জন্য সবচেয়ে নিরাপদ)
import mblBag from "../assets/mblbag.png";
import desktopBag from "../assets/bag.png";

const Bags = () => {
  return (
    <div className="px-6 md:px-10 lg:px-0">
      <div
        // ২. মোবাইলের জন্য ইনলাইন স্টাইল ব্যবহার করুন
        style={{ backgroundImage: `url(${mblBag})` }}
        className="bg-no-repeat bg-cover bg-center max-w-[1440px] m-auto h-[500px] md:h-[600px] lg:h-[560px] xl:h-[450px] flex flex-col justify-start xl:justify-end items-center xl:items-start pt-10 xl:pt-0 md:pb-8 lg:pb-10 xl:pl-16 px-8 text-center xl:text-left rounded-3xl overflow-hidden xl:bg-contain xl:bg-bottom"
      >
        {/* ৩. বড় স্ক্রিনের জন্য টেলউইন্ড ডাইনামিক ক্লাস (অপশনাল, তবে ইনলাইন স্টাইলই বেস্ট) */}
        <style jsx>{`
          @media (min-width: 1280px) {
            div {
              background-image: url(${desktopBag}) !important;
            }
          }
        `}</style>

        {/* Heading */}
        <h1 className="mb-4 md:mb-4 lg:mb-5 text-[28px] md:text-[36px] lg:text-[32px] xl:text-[30px] text-[#000000] font-bold md:mt-5 leading-tight">
          A Lightweight Design That Moves With You <br className="hidden xl:block" />
          Ultra-Slim Design for Effortless Portability
        </h1>

        {/* Paragraph */}
        <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] text-[#4E4D4D] font-semibold hidden md:block max-w-[560px]">
          With a slim 4 mm profile and a lightweight 750 g build, 
          Lumina 15F adds screen space without adding bulk.
        </p>
      </div>
    </div>
  );
};

export default Bags;