import Display from "../assets/Display 5 copy 1.png";
import MaskGroupMbl from "../assets/MaskGroupMbl.png";

const Uniform = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20 md:mt-40 max-w-355 m-auto px-6
       md:px-0">
        <h2 className="text-[28px] md:text-[48px] font-bold text-[#78797F] text-center leading-tight">
          Uniform Visuals from{" "}
          <span className="text-[#3C3C3D]">Every Angle</span>
        </h2>

        <p className="leading-[140%] mt-4 md:mt-6 mb-8 md:mb-11 text-center text-[16px] md:text-[24px] text-[#353434] max-w-355">
          The Qbits Lumina 15F integrates a 15.6-inch Full HD (1920 × 1080) IPS
          panel designed for visual stability and consistency. With a 178°
          viewing angle, details remain sharp, colors stay balanced, and
          brightness is evenly maintained across the screen, even when viewed
          from off-center positions.
        </p>

        <div className="flex flex-row gap-10 md:gap-100 ">
          <div className="left items-center flex justify-center text-center flex-col">
            <h5 className="text-[24px] md:text-[36px] font-bold text-black">
              1920 X 1080
            </h5>
            <p className="text-[14px] md:text-[20px] font-medium text-[#464646]">
              Resolution
            </p>
          </div>
          <div className="right items-center flex justify-center text-center flex-col">
            <h5 className="text-[24px] md:text-[36px] font-bold text-black">
              178°
            </h5>
            <p className="text-[14px] md:text-[20px] font-medium text-[#464646]">
              Wide Viewing Angle
            </p>
          </div>
        </div>
      </div>

      <img
        src={Display}
        alt="Monitor Display"
        className="w-full h-auto object-contain hidden md:block"
      />
      <img
        src={MaskGroupMbl}
        alt="Monitor Display"
        className="w-full h-auto object-contain md:hidden"
      />
    </>
  );
};

export default Uniform;
