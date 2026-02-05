import React from "react";

const Header = () => {
  return (
    <header className="bg-[url('./assets/heroPic.png')] bg-cover bg-center w-full min-h-screen flex flex-col items-center pt-20 pb-16">
  
  <div className="flex-grow flex flex-col items-center ">
    <h1 className="text-[8vw] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[85px] 2xl:text-[90px] font-extrabold text-center leading-none bg-gradient-to-r from-[#1e7bd9] via-[#45c8ff] to-[#b6f6ff] bg-clip-text text-transparent">
      LUMINA 15F
    </h1>
    
    <h2 className="mt-4 text-[4.5vw] sm:text-[20px] md:text-[23px] lg:text-[30px] xl:text-[39px] 2xl:text-[45px] text-white text-center capitalize font-semibold max-w-4xl px-4">
      A Portable Monitor Built For Visual <br className="hidden md:block" /> Excellence
    </h2>
  </div>

  <button className="relative p-[2px] rounded-3xl bg-gradient-to-b from-[#492aea] via-[#ad7738] 54% to-[#7638a9] transition-transform hover:scale-105 active:scale-95">
    <div className="bg-white px-10 py-3.5 rounded-[calc(1.5rem-2px)]">
      <span className="text-[20px] font-semibold text-black">Buy Now</span>
    </div>
  </button>

</header>
  );
};

export default Header;
