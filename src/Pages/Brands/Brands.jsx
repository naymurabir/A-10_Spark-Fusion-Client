import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://spark-fusion-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (

        <div>
            <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                <h2 className="text-xl font-bold text-[#CE1446]">Brands</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Our Brands</h1>
                <hr className="my-3" />

                <p> Simplify your tech research by accessing a diverse array of brands and products all in one place. Whether you are looking for smartphones, laptops, gaming gear, or home electronics. Explore the latest innovations and compare prices, specifications, and user reviews effortlessly. Say goodbye to endless searches and hello to efficient tech discovery!</p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand} ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;