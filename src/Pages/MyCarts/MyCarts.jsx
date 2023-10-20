import { useLoaderData } from "react-router-dom";
import MyCart from "../MyCart/MyCart";
import { useState } from "react";
import swal from "sweetalert";


const MyCarts = () => {

    const loadedCarts = useLoaderData()

    const [carts, setCarts] = useState(loadedCarts);

    const handleDeleteCart = (id) => {
        // fetch(`https://spark-fusion-server.vercel.app/carts/${id}`, {
        //     method: 'DELETE',
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://spark-fusion-server.vercel.app/carts/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.deletedCount > 0) {
                                const remaining = carts.filter(cart => cart._id !== id)
                                setCarts(remaining)

                                swal("Poof! Your cart has been deleted!", {
                                    icon: "success",
                                });
                            }

                            swal("The cart has been deleted!", {
                                icon: "success",
                            });
                        })
                } else {
                    swal("Your file is safe!");
                }
            });
    }

    return (
        <div>
            <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                <h2 className="text-xl font-bold text-[#CE1446]">Carts</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Your Cart List</h1>
                <hr className="my-3" />

                <p> Explore your shopping cart. Review, update, and complete your purchases with ease. Your one-stop destination for managing your selected items before checkout.</p>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">

                {
                    carts.map(cart => <MyCart key={cart._id} cart={cart} handleDeleteCart={handleDeleteCart}></MyCart>)
                }

            </div>

        </div>
    );
};

export default MyCarts;