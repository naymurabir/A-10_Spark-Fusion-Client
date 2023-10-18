import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {

    const { _id, name, image, brand_name, type, price, rating } = product

    return (
        <div>
            <div className="card card-compact shadow-lg p-2">
                <img className='rounded w-full h-[200px]' src={image} alt="Images" />
                <div className="card-body">
                    <h2 className='text-xl font-bold text-center'> {name} </h2>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-bold'>Brand: <span className='text-sm font-normal'>{brand_name}</span></h3>
                        </div>
                        <div>
                            <h3 className='text-base font-bold'>Type: <span className='text-sm font-normal'>{type}</span> </h3>
                        </div>
                    </div>

                    <div >
                        <h2 className='text-base font-bold'>Price: <span className='text-sm font-normal'>${price}</span> </h2>

                        <div className='flex items-center gap-3'>
                            <h3 className='text-base font-semibold'>Rating <span className='text-sm font-normal'>{rating}</span> </h3>

                            <div className="rating w-24">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between gap-3 mt-2'>

                        <Link to={`/details/${_id}`} className='w-full'>
                            <button className='text-lg text-white font-semibold bg-rose-600 hover:bg-rose-400 px-3 py-1 rounded w-full'>Details</button>
                        </Link>

                        <Link className='w-full'>
                            <button className='text-lg text-white font-semibold bg-rose-600 hover:bg-rose-400 px-3 py-1 rounded w-full'>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;