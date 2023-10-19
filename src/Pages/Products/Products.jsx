import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Products = () => {

    const brandProducts = useLoaderData()

    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-300px md:h-[350px] lg:h-[400px] w-full"
            >
                <SwiperSlide>
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/QnYHymH/xiaomi-tv.jpg"
                            alt=""
                            className="w-full h-full"
                        />

                        <div className="absolute md:left-16 bottom-10 md:bottom-24 lg:bottom-32 flex justify-center ">
                            <img className="opacity-70 w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/NYJc7sn/offer3.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/gRDM97T/sony-headphone.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                    <div className="bottom-10 left-20  absolute md:left-16 md:bottom-24 lg:bottom-32 flex justify-center  ">
                        <img className="w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/zSQGRRS/offer5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/StGhYkj/sony-camera.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-10 md:bottom-32 left-0 flex justify-center ">
                        <img className="w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/NYJc7sn/offer3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/18kLQjw/samsung-camera.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-0 md:bottom-32 left-0 flex justify-center ">
                        <img className="w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/VM70n3c/offer1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/9nhsrWx/mackbook.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-10 md:bottom-32 left-0 flex justify-center ">
                        <img className="w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/x5SykxZ/offer2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/J5QP5wS/apple-watch.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-10 md:bottom-32 left-0 flex justify-center ">
                        <img className="w-32 h-32 md:w-72 md:h-72" src="https://i.ibb.co/NYJc7sn/offer3.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>


            <div>

                <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                    <h2 className="text-xl font-bold text-[#CE1446]">Products</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Our Special Products</h1>
                    <hr className="my-3" />

                    <p> Unlock the future with our tech products! From smartphones to smart home devices, our selection offers innovation at your fingertips. Upgrade your digital lifestyle now!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:my-5 lg:my-10">
                    {
                        brandProducts?.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;