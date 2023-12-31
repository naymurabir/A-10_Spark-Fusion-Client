import Marquee from "react-fast-marquee"


const Banner = () => {
    return (
        <div className="relative ">
            <div className="hero h-[250px] md:h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/8srxW8V/banner1.jpg)' }}>
                <div className="bg-opacity-50"></div>
                <div className="mb-64 hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-xl  md:text-2xl lg:text-4xl text-white font-bold">Your Gateway to Tech Transformation.</h1>
                        <button className="bg-[#b41215] text-white px-4 py-1 rounded">Learn More</button>
                    </div>
                </div>

            </div>
            <div className="absolute left-0 bottom-0 bg-opacity-50 bg-black hidden md:block">
                <Marquee pauseOnHover speed={100}>
                    <div className="flex md:gap-10 lg:gap-20">

                        <img className="w-12 md:w-28 rounded" src="https://i.ibb.co/Zdf9Mq7/apple2.jpg" alt="" />

                        <img className="w-12 md:w-28 rounded" src="https://i.ibb.co/Wy9fJb1/xiaomi.jpg" alt="" />

                        <img className="w-12 md:w-28 rounded" src="https://i.ibb.co/2vfTnGN/samsung-Logo.jpg" alt="" />

                        <img className="w-12 md:w-28 rounded" src="https://i.ibb.co/fdxK5Wx/sonyLogo.jpg" alt="" />

                        <img className="w-12 md:w-28 rounded" src="https://i.ibb.co/gDp2sx4/nokia.webp" alt="" />

                        <img className="w-12 md:w-28 rounded mr-10" src="https://i.ibb.co/RSBcXp8/intel.jpg" alt="" />

                    </div>
                </Marquee>
            </div>


        </div>
    );
};

export default Banner;