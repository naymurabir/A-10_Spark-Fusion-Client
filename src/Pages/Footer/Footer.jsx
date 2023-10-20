import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-white bg-gray-800 mt-5">
                <nav>
                    <header className="font-bold text-indigo-500 ">OUR SERVICES</header>
                    <a className="link link-hover">Smart Gadgets</a>
                    <a className="link link-hover">Smart Home Gadgets</a>
                    <a className="link link-hover">Tech Accessories</a>
                    <a className="link link-hover">Brand Based Products</a>
                </nav>
                <nav>
                    <header className="font-bold text-indigo-500">COMPANY</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <header className="font-bold text-indigo-500">FOLLOW US</header>
                    <div className="grid grid-flow-col gap-4">
                        <a> <FaFacebook className='text-2xl'></FaFacebook> </a>
                        <a> <FaLinkedin className='text-2xl'></FaLinkedin> </a>
                        <a> <FaTwitter className='text-2xl'></FaTwitter> </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;