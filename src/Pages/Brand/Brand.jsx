import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Brand = ({ brand }) => {

    const { brandName, brandURL } = brand

    return (

        <Link to={`/products/${brandName}`}>
            <div className="card card-compact  shadow-lg p-2 bg-gray-100 border border-blue-600">
                <img className='rounded w-full h-[200px]' src={brandURL} alt="Brands" />
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-center'> {brandName} </h2>
                </div>
            </div>
        </Link>
    );
};

Brand.propTypes = {
    brand: PropTypes.object.isRequired
}

export default Brand;