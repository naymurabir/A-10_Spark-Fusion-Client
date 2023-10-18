import { useLoaderData } from "react-router-dom";

const Products = () => {

    const brandProducts = useLoaderData()
    console.log(brandProducts);


    return (
        <div>
            <h2>Products is coming..................</h2>
        </div>
    );
};

export default Products;