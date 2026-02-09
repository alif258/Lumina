import laptop from "../assets/Laptop.png";
import laptopImg from "../assets/LaptopImg.png"; 

const WhatintheBox = () => {
  return (
    <div className="max-w-355 m-auto px-6 md:px-10 lg:px-0">
      <div className="bg-[#E8ECF9] rounded-3xl pb-0 p-6 max-w-355 m-auto mt-20 md:mt-40 lg:mt-61.5 flex flex-col-reverse md:flex-row items-end justify-between gap-7 md:gap-8 lg:gap-10">

        <div className="img w-full md:w-[50%] flex justify-center items-end">
          <img
            src={laptopImg}
            alt="Dual Speakers"
            className="w-full h-auto object-contain object-bottom block lg:hidden"
          />
          <img
            src={laptop}
            alt="Dual Speakers"
            className="w-full h-auto object-contain object-bottom hidden lg:block"
          />
        </div>

        <div className="text gradient-bg mb-6 box-3 rounded-3xl py-12 md:py-10 lg:py-12 px-8 md:px-10 lg:px-13 w-full md:w-[50%] flex flex-col justify-center">
          <h1 className="text-[27px] md:text-[28px] lg:text-[31px] text-[#010101] font-bold leading-[139%]">
            What's in the Box
          </h1>
          <p className="text-[18px] md:text-[17px] lg:text-[18px] text-[#4E4D4D] leading-relaxed">
            Everything you need to get started with the Qbits
          </p>

          <ul className="list-disc list-outside ml-5 space-y-2 text-[#010101] text-[16px] md:text-[20px] lg:text-2xl mt-6.5">
            <li>Qbits Lumina 15F portable monitor included.</li>
            <li>One HDMI cable for easy connection.</li>
            <li>One USB-C to USB-C cable for compatible devices.</li>
            <li>
              10W USB Type-C power adapter for reliable power anywhere.
            </li>
          </ul>

          <h4 className="text-[#010101] font-semibold text-[16px] md:text-[20px] lg:text-2xl mt-6 md:mt-9 lg:mt-12">
            All essential accessories included for a smooth, plug-and-play
            experience.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WhatintheBox;