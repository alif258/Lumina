import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      {/* md:pb-4 দেওয়ার ফলে পিসিতে বাটনটি আরও নিচে নেমে যাবে */}
      <header className="bg-[url('./assets/heroBgMbl.png')] md:bg-[url('./assets/heroPic.png')] bg-cover bg-center h-[750px] md:h-screen w-full flex flex-col items-center justify-between pt-24 md:pt-18 pb-0 md:pb-16">
        
        {/* Text Content */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[12vw] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold text-center leading-tight bg-gradient-to-r from-[#1e7bd9] via-[#45c8ff] to-[#b6f6ff] bg-clip-text text-transparent drop-shadow-sm">
            LUMINA 15F
          </h1>

          <h2 className="mt-4 text-[5vw] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[45px] text-white text-center capitalize font-semibold max-w-5xl leading-tight">
            A Portable Monitor Built For Visual{" "}
            <br className="hidden md:block" /> Excellence
          </h2>
        </div>

        {/* PC Button - md:mb-0 করে একদম নিচে নামানো হয়েছে */}
        <button className="hidden md:block relative p-[2px] rounded-full bg-gradient-to-b from-[#492aea] via-[#ad7738] to-[#7638a9] transition-transform hover:scale-105 active:scale-95 shadow-lg mb-0">
          <div className="bg-white px-10 py-3 md:px-14 md:py-4 rounded-full">
            <span className="text-[18px] md:text-[22px] font-bold text-black uppercase tracking-wide">
              Buy Now
            </span>
          </div>
        </button>

        {/* মোবাইলের স্পেসার */}
        <div className="md:hidden"></div>
      </header>

      {/* Mobile Button - ইমেজের নিচে */}
      <div className="md:hidden py-8">
        <button className="relative p-[2px] rounded-full bg-gradient-to-b from-[#492aea] via-[#ad7738] to-[#7638a9] transition-transform hover:scale-105 active:scale-95 shadow-lg">
          <div className="bg-white px-10 py-3 rounded-full">
            <span className="text-[18px] font-bold text-black uppercase tracking-wide">
              Buy Now
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;