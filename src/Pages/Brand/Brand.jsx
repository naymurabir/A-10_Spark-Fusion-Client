import PropTypes from 'prop-types';


const Brand = ({ brand }) => {

    const { brandName, brandURL } = brand

    return (

        <div>
            <div className="card card-compact  shadow-lg p-2 bg-gray-100">
                <figure><img src={brandURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-center'> {brandName} </h2>
                </div>
            </div>
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object.isRequired
}

export default Brand;