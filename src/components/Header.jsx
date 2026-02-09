import React from "react";

const Header = () => {
  return (
    <div className="text-center">
      <header className="bg-[url('./assets/heroBgMbl.png')] md:bg-[url('./assets/heroPic.png')] bg-cover bg-center h-[500px] md:h-screen w-full flex flex-col items-center justify-between pt-28 md:pt-16 pb-0 md:pb-16">
        
        {/* Text Content */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold text-center leading-tight bg-gradient-to-r from-[#1e7bd9] via-[#45c8ff] to-[#b6f6ff] bg-clip-text text-transparent drop-shadow-sm">
            LUMINA 15F
          </h1>

          <h2 className="max-w-[340px] md:max-w-355 mt-1 md:mt-4 text-[24px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] text-white text-center capitalize font-semibold max-w-5xl leading-tight">
            A Portable Monitor Built For Visual{" "}
            <br className="hidden md:block" /> Excellence
          </h2>
        </div>

        <button className="hidden md:block relative p-[2px] rounded-full bg-gradient-to-b from-[#492aea] via-[#ad7738] to-[#7638a9] transition-transform hover:scale-105 active:scale-95 shadow-lg mb-0">
          <div className="bg-white px-10 py-3 md:px-14 md:py-4 rounded-full">
            <span className="text-[18px] md:text-[22px] font-bold text-black uppercase tracking-wide">
              Buy Now
            </span>
          </div>
        </button>

        <div className="md:hidden"></div>
      </header>

      <div className="md:hidden py-8">
        <button className="relative p-[2px] rounded-full bg-gradient-to-b from-[#492aea] via-[#ad7738] to-[#7638a9] transition-transform hover:scale-105 active:scale-95 shadow-lg">
          <div className="bg-white px-6 py-2  rounded-full">
            <span className="text-[16px] font-bold text-black uppercase tracking-wide">
              Buy Now
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;