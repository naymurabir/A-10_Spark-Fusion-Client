import { FcApproval } from 'react-icons/fc';


const Features = () => {
    return (
        <div>
            <div>
                <div className="container px-6 py-10 mx-auto">

                    <div className='text-center'>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Explore our <br /> Awesome Products.</h1>

                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>

                    <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                            <div className="space-y-2">
                                <span className="text-blue-500 text-4xl ">
                                    <FcApproval></FcApproval>
                                </span>

                                <h1 className="text-xl font-semibold capitalize text-black">Smart Home Gadgets</h1>

                                <p className="text-black ">
                                    Unearth extensive product specifications, including brand-specific details like display technology, camera features, and unique design elements. Find the right fit.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-blue-500 text-4xl ">
                                    <FcApproval></FcApproval>
                                </span>

                                <h1 className="text-xl font-semibold capitalize text-black">Computing Essentials</h1>

                                <p className="text-black">
                                    Explore real-world performance metrics tailored to each brands distinctive strengths. From Apple iOS ecosystem to Xiaomi affordability.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-blue-500 text-4xl ">
                                    <FcApproval></FcApproval>
                                </span>

                                <h1 className="text-xl font-semibold capitalize text-black">Tech Accessories</h1>

                                <p className="text-black">
                                    Discover the legacy and innovation behind each brand. Learn why Apple excels in user experience, why Samsung leads in displays, or why Xiaomi offers budget-friendly brilliance.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-blue-500 text-4xl ">
                                    <FcApproval></FcApproval>
                                </span>

                                <h1 className="text-xl font-semibold capitalize text-black">Smart Home Solutions</h1>

                                <p className="text-black">
                                    Get insights into brand-specific compatibility, ensuring seamless integration with your tech ecosystem. Learn how Nokia Android One syncs with your digital lifestyle.
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[28rem] xl:h-[28rem] rounded-full" src="https://i.ibb.co/BsdDtMs/banner.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;