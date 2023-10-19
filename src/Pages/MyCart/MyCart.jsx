import PropTypes from 'prop-types';


const MyCart = ({ cart, handleDeleteCart }) => {

    const { _id, name, image, brand_name, price } = cart


    return (
        <div>
            <div className="card card-compact shadow-lg p-2">
                <img className='rounded w-full h-[200px]' src={image} alt="Images" />
                <div className="card-body">
                    <h2 className='text-xl font-bold text-center'> {name} </h2>
                    <hr />
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-bold'>Brand: <span className='text-sm font-semibold'>{brand_name}</span></h3>
                        </div>

                        <div >
                            <h2 className='text-base font-bold'>Price: <span className='text-sm font-semibold'>${price}</span> </h2>
                        </div>
                    </div>

                    <button onClick={() => handleDeleteCart(_id)} className='text-lg text-white font-semibold bg-rose-600 hover:bg-rose-400 px-3 py-1 rounded w-full'>Delete</button>
                </div>
            </div>
        </div>
    );
};

MyCart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleDeleteCart: PropTypes.func.isRequired
}

export default MyCart;