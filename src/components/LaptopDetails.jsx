import back from "../assets/back stand 4.png";
import Lania from "../assets/Lania N95 with Lumina 15 1.png";
import Usb from "../assets/Usb C port connection 4.png";


const LaptopDetails = () => {
    return (
<div className="w-full flex flex-col gap-10 md:gap-12 lg:gap-15 xl:gap-15 py-15 md:py-28 lg:py-42 xl:py-42 px-6 md:px-10 lg:px-0
    /* Mobile: Image jate kete na jay tai bg-top and bg-[length] use kora hoyeche */
    bg-[url('./assets/mblbg.png')] bg-no-repeat bg-top bg-[length:100%_100%]
    /* Tablet: Desktop image background */
    md:bg-[url('./assets/bg01.png')] md:bg-center md:bg-cover md:min-h-screen
    /* Laptop: No background */
    lg:bg-none lg:min-h-0
    /* Desktop (xl): Background image again */
    xl:bg-[url('./assets/bg01.png')] xl:bg-center xl:bg-cover xl:min-h-screen">
    
    {/* Section 01 */}
    <div className="div01 max-w-[1420px] m-auto flex flex-col md:flex-row items-center gap-10 md:gap-10 lg:gap-12">
        <div className="text w-full md:w-[50%]">
            <h5 className='text-center md:text-start text-[19px] md:text-[28px] lg:text-[36px] font-bold text-[#78797F]'>Travel-Ready Shield</h5>
            <h2 className='text-center md:text-start text-[27px] md:text-[38px] lg:text-[48px] font-bold text-[#313030] leading-tight'>Protective Cover with <br className="hidden md:block" /> Integrated Stand</h2>
            <p className='text-center md:text-start text-[18px] md:text-[20px] lg:text-[24px] text-[#1B1B1B] mt-4 md:mt-5 lg:mt-6'>Integrated with a slim, foldable protective cover, Lumina 15F is designed to stay protected in transit and transition seamlessly into a stable stand when it's time to work. Whether placed on a desk, meeting table or temporary setup, the design keeps the display steady, protected, and ready for productive use.</p>
        </div>
        <div className="img w-full md:w-[50%]">
            <img src={back} alt="Protective Cover" className="w-full h-auto object-contain" />
        </div>
    </div>

    {/* Section 02 */}
    <div className="div03 max-w-[1420px] m-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-10 lg:gap-12">
        <div className="img w-full md:w-[50%]">
            <img src={Usb} alt="Power Adapter" className="w-full h-auto object-contain" />
        </div>
        <div className="text w-full md:w-[50%]">
            <h5 className='text-center md:text-start text-[19px] md:text-[28px] lg:text-[36px] font-bold text-[#78797F]'>Instant Display</h5>
            <h2 className='text-center md:text-start text-[27px] md:text-[38px] lg:text-[48px] font-bold text-[#313030] leading-tight'>Single Cable, Instant Setup</h2>
            <p className='text-center md:text-start text-[18px] md:text-[20px] lg:text-[24px] text-[#1B1B1B] mt-4 md:mt-5 lg:mt-6'>If your laptop, mini PC or device features a Full-Function USB-C, USB 4.0 or Thunderbolt port. The Lumina 15F works with a single USB-C to USB-C cable. That one cable delivers both power and display signal at the same time. No extra power adapter needed, just plug in and your screen is ready to use.</p>
        </div>
    </div>

    {/* Section 03 */}
    <div className="div02 max-w-[1420px] m-auto flex flex-col md:flex-row items-center gap-10 md:gap-10 lg:gap-12">
        <div className="text w-full md:w-[50%]">
            <h5 className='text-center md:text-start text-[19px] md:text-[28px] lg:text-[36px] font-bold text-[#78797F]'>USB-C</h5>
            <h2 className='text-center md:text-start text-[27px] md:text-[38px] lg:text-[48px] font-bold text-[#313030] leading-tight'>Power Adapter Support</h2>
            <p className='text-center md:text-start text-[18px] md:text-[20px] lg:text-[24px] text-[#1B1B1B] mt-4 md:mt-5 lg:mt-6'>The Lumina 15F Portable Monitor can be powered directly using a 10W USB-C power adapter included in the box. If your device does not support full-function USB-C display output, or only support HDMI output, simply connect the adapter and the monitor powers on instantly.</p>
        </div>
        <div className="img w-full md:w-[50%]">
            <img src={Lania} alt="USB-C Setup" className="w-full h-auto object-contain" />
        </div>
    </div>
</div>
    )
}

export default LaptopDetails