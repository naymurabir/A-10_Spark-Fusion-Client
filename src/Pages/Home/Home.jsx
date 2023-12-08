import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import OurSupport from "../OurSupport/OurSupport";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (

        <div>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>

            <Banner></Banner>
            <Brands></Brands>
            <OurSupport></OurSupport>
            <Features></Features>
        </div>
    );
};

export default Home;