import React from "react";

const Header = () => {
  return (
    <div className="w-full mx-auto lg:min-h-screen">

      {/* HERO */}
      <header
        className="
          bg-[url('./assets/heroBgMbl.png')] 
          md:bg-[url('./assets/heroPic.png')] 
          bg-cover bg-center bg-no-repeat
          min-h-[70vh]
          lg:h-screen
          w-full
          relative
        "
      >
        {/* TEXT */}
        <div className="absolute top-[18%] sm:top-[22%] md:top-[20%] lg:top-[15%] xl:top-[11%] 2xl:top-[10%] left-1/2 -translate-x-1/2 text-center px-4 w-full max-w-5xl">

          <h1 className="text-[8vw] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[85px] 2xl:text-[90px] font-extrabold leading-none bg-gradient-to-r from-[#1e7bd9] via-[#45c8ff] to-[#b6f6ff] bg-clip-text text-transparent">
            LUMINA 15F
          </h1>

          <h2 className="text-[4.5vw] sm:text-[20px] md:text-[23px] lg:text-[30px] xl:text-[39px] 2xl:text-[45px] text-white font-semibold capitalize leading-tight">
            A Portable Monitor Built For Visual
            <br />
            Excellence
          </h2>

        </div>
      </header>

      {/* SINGLE BUTTON (OUTSIDE HERO / BELOW BG) */}
      <div className="flex justify-center mt-6 md:mt-8 lg:mt-10 mb-8">
        <button className="p-[2px] rounded-full bg-gradient-to-b from-[#492aea] via-[#ad7738] to-[#7638a9] transition-transform hover:scale-105 active:scale-95 shadow-xl">
          <div className="bg-white px-8 py-3 md:px-12 lg:px-14 md:py-3 lg:py-4 rounded-full">
            <span className="text-[16px] md:text-[20px] lg:text-[22px] font-bold text-black uppercase tracking-wide">
              Buy Now
            </span>
          </div>
        </button>
      </div>

    </div>
  );
};

export default Header;
