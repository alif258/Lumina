import back from "../assets/back stand 4.png";
import Lania from "../assets/Lania N95 with Lumina 15 1.png";
import Usb from "../assets/Usb C port connection 4.png";


const LaptopDetails = () => {
    return (
        <div className="bg-[url('./assets/bg01.png')] bg-cover bg-center w-full h-full py-35">






            <div className="div01 max-w-355 m-auto flex items-center gap-6">
                <div className="text w-[50%]">
                    <h5 className='text-[36px] font-bold text-[#78797F]'>Travel-Ready Shield</h5>
                    <h2 className='text-[48px] font-bold text-[#313030]'>Protective Cover with Integrated Stand</h2>
                    <p className='text-[24px]  text-[#1B1B1B] mt-6'>Integrated with a slim, foldable protective cover, Lumina 15F is designed to stay protected in transit and transition seamlessly into a stable stand when it’s time to work. Whether placed on a desk, meeting table or temporary setup, the design keeps the display steady, protected, and ready for productive use.</p>
                </div>
                <div className="img w-[50%]">
                    <img src={back} alt="" />
                </div>
            </div>





            <div className="div02 max-w-355 m-auto flex items-center gap-6 my-25">
             
                <div className="img w-[50%]">
                    <img src={Usb} alt="" />
                </div>
                   <div className="text w-[50%]">
                    <h5 className='text-[36px] font-bold text-[#78797F]'>Instant Display</h5>
                    <h2 className='text-[48px] font-bold text-[#313030]'>Single Cable, Instant Setup</h2>
                    <p className='text-[24px]  text-[#1B1B1B] mt-6'>If your laptop, mini PC or device features a Full-Function USB-C, USB 4.0 or Thunderbolt port. The Lumina 15F works with a single USB-C to USB-C cable. That one cable delivers both power and display signal at the same time. No extra power adapter needed, just plug in and your screen is ready to use.</p>
                </div>
            </div>










            <div className="div03 max-w-355 m-auto flex items-center gap-6">
                <div className="text w-[50%]">
                    <h5 className='text-[36px] font-bold text-[#78797F]'>USB-C</h5>
                    <h2 className='text-[48px] font-bold text-[#313030]'>Power Adapter Support</h2>
                    <p className='text-[24px]  text-[#1B1B1B] mt-6'>The Lumina 15F Portable Monitor can be powered directly using a 10W USB-C power adapter included
                        in the box. If your device does not support full-function USB-C display output, or only support HDMI output, simply connect the adapter and the monitor powers
                        on instantly.</p>
                </div>
                <div className="img w-[50%]">
                    <img src={Lania} alt="" />
                </div>
            </div>


















        </div>
    )
}

export default LaptopDetails
