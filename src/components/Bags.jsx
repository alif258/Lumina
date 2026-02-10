import React from 'react';
import Portability from "../assets/Portability.webp";

const Bags = () => {
  return (
    <div>
      <section className="max-w-355 mx-auto pt-10 md:pt-28 px-6 md:px-10 lg:px-0">
        <div className="w-full h-full rounded-[30px] gradient-bg box-1 ">
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-6">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 pb-0 p-8 lg:pl-12 lg:pb-12  md:py-12 text-center lg:text-left">
              <h4 className="text-[24px] md:text-[30px] text-[#000000] mb-0 md:mb-6 font-bold leading-tight">
                A Lightweight Design That Moves With You Ultra-Slim Design for Effortless Portability
              </h4>
              
              <p className="hidden md:block lg:block text-[#4E4D4D] text-[18px] md:text-[20px] font-semibold">
                With a slim 4 mm profile and a lightweight 750 g build, Lumina 15F adds screen space without adding bulk.
              </p>
            </div>
            
            {/* Image Container */}
            <div className="w-full md:w-1/2 relative md:min-h-[150px] lg:min-h-[255px]  flex justify-center items-end">
              <img 
                src={Portability} 
                alt="Portability design" 
                className="w-[90%] md:w-full h-auto object-contain md:absolute md:right-10 md:bottom-0" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bags;