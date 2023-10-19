import { FcBullish, FcHighPriority, FcCustomerSupport, FcAutomotive, FcCallback } from 'react-icons/fc';


const OurSupport = () => {
    return (
        <div>
            <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                <h2 className="text-xl font-bold text-[#CE1446]">Help Desk</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Help & Information</h1>
                <hr className="my-3" />

                <p> 24/7 Support: We are always here to help with your tech questions and concerns, anytime you need us. Enjoy uninterrupted assistance and peace of mind, knowing that our dedicated team is ready around the clock to provide solutions and ensure your convenience.</p>
            </div>
            <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-10 mb-10 rounded">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                Welcome to
                            </p>
                            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white dark:text-white sm:text-3xl sm:leading-9">
                                Tech Assistance Center.
                            </h4>
                            <p className="mt-4 leading-6 text-gray-500 dark:text-gray-300 text-sm">
                                Welcome to our comprehensive Tech Support Hub, where you will find answers to all your tech-related questions. Our expert team is here to provide you with top-notch support, troubleshooting, and solutions. Explore our frequently asked questions, contact our friendly customer care, and get the assistance you need for a seamless tech experience.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex items-center">
                                        <span className="flex items-center justify-center text-3xl">
                                            <FcBullish></FcBullish>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-white ">
                                            <h2>Product Comparisons</h2>
                                            <div className='flex items-center gap-1 mt-1'>
                                                <FcCallback />
                                                <span className='text-xs text-indigo-500'>+8805854463</span>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex items-center">
                                        <span className="flex items-center justify-center text-3xl">
                                            <FcHighPriority></FcHighPriority>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-white ">
                                            <h2> Technical Support</h2>
                                            <div className='flex items-center gap-1 mt-1'>
                                                <FcCallback />
                                                <span className='text-xs text-indigo-500'>+8802654653</span>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex items-center">
                                        <span className="flex items-center justify-center text-3xl">
                                            <FcCustomerSupport></FcCustomerSupport>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-white ">
                                            <h2>Customer Service Support</h2>
                                            <div className='flex items-center gap-1 mt-1'>
                                                <FcCallback />
                                                <span className='text-xs text-indigo-500'>+8805854460</span>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex items-center">
                                        <span className="flex items-center justify-center text-3xl">
                                            <FcAutomotive></FcAutomotive>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-white ">
                                            <h2>Order and Shipping Support</h2>
                                            <div className='flex items-center gap-1 mt-1'>
                                                <FcCallback />
                                                <span className='text-xs text-indigo-500'>+8805854465</span>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://i.ibb.co/t4Y4v2H/support2.jpg" alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://i.ibb.co/HtDvJBQ/support3.jpg" alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-52" width="170" src="https://i.ibb.co/q75r3BH/support1.jpg" alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-64" width="200" src="https://i.ibb.co/M1tZtJq/support4.jpg" alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSupport;