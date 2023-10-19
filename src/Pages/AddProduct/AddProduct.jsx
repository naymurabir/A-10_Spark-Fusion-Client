import Swal from "sweetalert2";
import { useState } from "react";

const AddProduct = () => {

    const [selectedValue, setSelectedValue] = useState('')

    const handleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const brand_name = selectedValue
        const image = form.get('image')
        const type = form.get('type')
        const price = form.get('price')
        const rating = form.get('rating')
        const description = form.get('description')
        const products = { name, brand_name, image, type, price, rating, description };

        console.log(products);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'A product is added Successfully.',
                        showConfirmButton: false,
                        timer: 2000,
                    })
                }
                e.target.reset()
            })

    }

    return (
        <div>
            <div className="my-5 text-center ">
                <h2 className="text-2xl mb-3 text-rose-600 font-bold">Add New Product</h2>
            </div>
            <div className="md:w-3/4 lg:w-2/4 mx-auto text-center bg-pink-200 px-5 py-4 my-10 rounded">

                <div>
                    <form onSubmit={handleAddProduct}>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name..." className="input input-bordered w-full text-sm max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Brand Name </span>
                                </label>

                                <select
                                    id="input"
                                    name="brand"
                                    className="input text-sm input-bordered w-full max-w-xs"
                                    value={selectedValue}
                                    onChange={(e) => setSelectedValue(e.target.value)}
                                >
                                    <option>Select Option Brand</option>
                                    <option value="Samsung" >Samsung</option>
                                    <option value="Nokia">Nokia</option>
                                    <option value="Intel">Intel</option>
                                    <option value="Sony">Sony</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                </select>

                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image..." className="input input-bordered w-full text-sm max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Type..." className="input input-bordered w-full text-sm max-w-xs" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 mt-5">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price..." className="input input-bordered w-full text-sm max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating..." className="input input-bordered w-full text-sm max-w-xs" />
                            </div>
                        </div>

                        <div >
                            <div className="mt-5">
                                <label className="label">
                                    <span className="label-text font-semibold">Description</span>
                                </label>
                                <textarea name="description" id="" cols="20" rows="5" placeholder="Description..." className="input input-bordered w-full  text-sm" ></textarea>
                            </div>
                        </div>

                        <button className="text-white font-semibold bg-rose-600 px-3 py-1 rounded w-full mt-3">Add Product</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;