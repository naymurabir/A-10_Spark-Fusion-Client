import { useLoaderData } from "react-router-dom";
import MyCart from "../MyCart/MyCart";


const MyCarts = () => {

    const loadedCarts = useLoaderData()

    return (
        <div>
            <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                <h2 className="text-xl font-bold text-[#CE1446]">Carts</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Your Cart List</h1>
                <hr className="my-3" />

                <p> Explore your shopping cart. Review, update, and complete your purchases with ease. Your one-stop destination for managing your selected items before checkout.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-10">
                {
                    loadedCarts.map(cart => <MyCart key={cart._id} cart={cart}></MyCart>)
                }
            </div>

        </div>
    );
};

export default MyCarts;