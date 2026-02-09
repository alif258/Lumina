import hotel from "../assets/hotel Lifestyle 1 1 1.png";
import portable from "../assets/portable monitor in cafe 2.png";
import Group from "../assets/Group 27265.png";

const Anywhere = () => {
  return (
    <div className="max-w-355 m-auto flex flex-col items-center px-6 md:px-0 md:mt-0 mt-12">
      <h1 className="text-[#BBBBBB] font-bold text-3xl md:text-5xl ">
        Your Workspace, <span className="text-[#48484C]">Anywhere</span>
      </h1>
      <p className="text-[#353434] text-[16px] md:text-2xl max-w-204.5 text-center leading-[139.1%] mt-3.5 mb-10">
        Turn any place into your workspace. Lumina 15F travels effortlessly with
        you, from flights to hotel rooms.
      </p>

      <div className="flex flex-col gap-6 md:gap-17.5 items-center w-full">
        {/* Top Image */}
        <div className="md:p-2 p-[5px] rounded-3xl gradient-bg box-5 w-full md:w-auto ">
          <img
            src={hotel}
            alt="Hotel Workspace"
            className="rounded-3xl w-full object-cover"
          />
        </div>

        {/* Bottom Two Images - Mobile: Vertical, Tablet/Desktop: Horizontal */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-17.5 w-full md:w-auto">
          <div className="md:p-2 p-[5px] rounded-3xl gradient-bg box-5 w-full md:w-auto">
            <img
              src={portable}
              alt="Portable Setup"
              className="rounded-3xl w-full object-cover"
            />
          </div>
          <div className="md:p-2 p-[5px] rounded-3xl gradient-bg box-5 w-full md:w-auto">
            <img
              src={Group}
              alt="Group Setup"
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anywhere;
