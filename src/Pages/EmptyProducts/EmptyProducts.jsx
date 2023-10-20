
const EmptyProducts = () => {

    return (
        <div className="flex flex-col md:flex-row items-center mb-5">

            <div className="md:w-[60%]">
                <img className="w-[250px] md:w-[350px] lg:w-[500px]" src="https://i.ibb.co/VWMKDv8/noData.jpg" alt="" />
            </div>

            <div className="md:w-[40%]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-700">No Products!!!</h1>
                <h2 className="text-sm md:text-base font-semibold mt-2">I m sorry!. There is no desired products of this brand right now. Please try another brand.</h2>
            </div>
        </div>
    );
};

export default EmptyProducts;