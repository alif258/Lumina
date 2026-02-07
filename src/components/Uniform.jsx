import Display from "../assets/Display 5 copy 1.png";


const Uniform = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-40 max-w-355 m-auto' >
                <h2 className='text-[48px] font-bold text-[#78797F]'>Uniform Visuals from <span className='text-[#3C3C3D]'>Every Angle</span></h2>
                <p className='leading-[140%] mt-6 mb-11 text-center text-[24px]  text-[#353434]'>The Qbits Lumina 15F integrates a 15.6-inch Full HD (1920 × 1080) IPS panel designed for visual stability and consistency. With a 178° viewing angle, details remain sharp, colors stay balanced, and brightness is evenly maintained across the screen, even when viewed from off-center positions.
                </p>

                <div className="flex gap-100">
                    <div className="left items-center flex justify-center text-center flex-col">
                        <h5 className='text-[36px] font-bold text-black'>1920 X 1080</h5>
                        <p className='text-[20px] font-medium text-[#464646]'>Resolution</p>
                    </div>
                    <div className="right items-center flex justify-center text-center flex-col">
                        <h5 className='text-[36px] font-bold text-black'>178°</h5>
                        <p className='text-[20px] font-medium text-[#464646]'>Wide Viewing Angle</p>
                    </div>
                </div>


            </div>
            <img src={Display} alt="" className="w-full h-full"/>
        </>
    )
}

export default Uniform
