import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee"
import Swal from "sweetalert2";
import { useState } from "react";

const ProductDetails = () => {

    const productDetails = useLoaderData()
    const { id } = useParams()
    const details = productDetails.find(productDetails => productDetails._id === id)

    const { name, image, brand_name, price, description } = details

    const [showCartButton, setShowCartButton] = useState(true)

    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }

    const handleAddToCart = () => {
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Congratulations! Product has been added to My Cart Page.',
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })

                }
            })
        setShowCartButton(false)
    }

    return (
        <div>

            <div>
                <div className="flex flex-col lg:flex-row gap-5 md:gap-10 my-5 lg:my-10">
                    <div className="lg:w-[60%]">
                        <img className="w-full h-[200px] md:h-[350px] lg:h-[400px] rounded " src={image} alt="" />
                    </div>
                    <div className="lg:w-[40%]">
                        <h2 className="className='text-2xl md:text-3xl lg:text-4xl font-bold text-rose-600'">{name}</h2>
                        <hr className="my-3" />
                        <p className="className='text-sm text-gray-900 mt-3 text-justify font-semibold'"> {description} </p>
                        <h3 className='text-xl font-semibold flex items-center mt-2'> Price: <span className="text-lg ml-1">${price}</span>  </h3>
                        <h3 className="text-xl font-semibold"> Brand:  <span className="text-lg">{brand_name}</span> </h3>

                        <div className="pt-4 flex gap-5">
                            <button onClick={handleGoHome} className='text-white font-semibold bg-rose-600 hover:bg-rose-400 px-4 py-1 rounded'>Go Home</button>

                            {
                                showCartButton ?
                                    <button onClick={handleAddToCart} className='text-white font-semibold bg-rose-600 hover:bg-rose-400 px-4 py-1 rounded'> Add to Cart </button>
                                    : ''
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex">
                <div>
                    <button className="bg-rose-600 hover:bg-rose-400 px-2 py-2 rounded text-white font-semibold">Features</button>
                </div>
                <Marquee speed={100}>
                    <div className="text-gray-800 font-semibold">
                        {description}
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default ProductDetails;