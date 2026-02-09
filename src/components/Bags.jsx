import React from "react";

const Bags = () => {
  return (
    <div className="px-6 md:px-10 lg:px-0">
  <div
  className="bg-[url('./assets/mblbag.png')] xl:bg-[url('./assets/bag.png')] bg-no-repeat bg-cover xl:bg-contain bg-center xl:bg-bottom max-w-355 m-auto h-140 md:h-[600px] lg:h-140 xl:h-90.5 flex flex-col justify-start xl:justify-end items-center xl:items-start pt-10 xl:pt-0 md:pb-8 lg:pb-10 xl:pl-8 px-8 text-center xl:text-left rounded-3xl overflow-hidden"
>
  {/* Heading */}
  <h1 className="mb-4 md:mb-4 lg:mb-5 text-[32px] md:text-[36px] lg:text-[32px] xl:text-[30px] text-[#000000] font-bold md:mt-5">
    A Lightweight Design That Moves With You <br className="hidden xl:block" />
    Ultra-Slim Design for Effortless Portability
  </h1>

  {/* Paragraph */}
  <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] text-[#4E4D4D] font-semibold xl:block md:block md:text-[30px] hidden max-w-[560px]">
   With a slim 4 mm profile and a lightweight 750 g build,
Lumina 15F adds screen space without adding bulk.</p>
</div>
</div>
  );
};

export default Bags;