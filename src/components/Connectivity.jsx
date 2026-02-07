import port from "../assets/port connection new Ports 1.png";
import usbMbl from "../assets/usbMbl.png";


const Connectivity = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h4 className='text-[19px] md:text-[36px] font-semibold text-[#87888F]'>Smarter Ports. Stronger Connections.</h4>
        <h2 className='md:text-[48px] text-[27px] font-bold mb-5.5 md:mb-0 text-[#313030]'>Effortless Connectivity</h2>
        <img src={port} alt="" className="w-full h-full hidden md:block" />
        <img src={usbMbl} alt="" className="w-full h-full  md:hidden" />
      </div>
    </>
  )
}

export default Connectivity
