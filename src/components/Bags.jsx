import React from "react";

const Bags = () => {
  return (
    <div className="px-6 md:px-0">
  <div
  className="bg-[url('./assets/Mblbags.png')] md:bg-[url('./assets/bag.png')] bg-cover bg-center max-w-355 m-auto h-140 md:h-90.5 flex flex-col justify-start md:justify-end items-center md:items-start pt-10 md:pt-0 md:pb-10 md:pl-11 px-8 text-center md:text-left rounded-3xl"
>
  {/* Heading */}
  <h1 className="mb-4 md:mb-5 text-[32px]  md:text-[30px] text-[#000000] font-bold">
    A Lightweight Design That Moves With You <br className="hidden md:block" />
    Ultra-Slim Design for Effortless Portability
  </h1>

  {/* Paragraph */}
  <p className="text-[16px] md:text-[20px] text-[#4E4D4D] font-semibold max-w-[560px] ">
   With a slim 4 mm profile and a lightweight 750 g build,
Lumina 15F adds screen space without adding bulk.</p>
</div>
</div>
  );
};

export default Bags;
