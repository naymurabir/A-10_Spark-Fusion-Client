import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const LoginPage = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')


        signInUser(email, password)
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your email / password is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .catch(error => {
                console.log("Error", error.message);
                swal(error.message)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .catch(error => {
                console.log("Error", error.message);
                swal(error.message)
            })
    }

    return (
        <div>

            <div>
                <form onSubmit={handleLogin} >
                    <h2 className="text-center text-[#CE1446] text-xl mt-3 md:mt-5 font-bold">Login your account</h2>

                    <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Input your email..."
                                className="input text-sm input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Input your password..."
                                className="input text-sm input-bordered"
                                required />
                        </div>

                        <div className="form-control mt-2">
                            <button className="bg-[#CE1446] text-white px-2 py-1 rounded hover:bg-rose-400">Login</button>
                        </div>

                        <div className="flex justify-center ">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                            </label>
                        </div>

                        <div className="flex justify-between flex-col md:flex-row md:gap-2">
                            <button onClick={handleGoogleLogIn} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                                <div className="px-4 py-2">
                                    <FcGoogle className="w-6 h-6"></FcGoogle>
                                </div>

                                <span className="w-5/6 px-4 py-3 font-bold text-center text-rose-600">Sign in with Google</span>
                            </button>
                            <button onClick={handleGithubLogin} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                                <div className="px-4 py-2">
                                    <FaGithub className="w-6 h-6"></FaGithub>
                                </div>

                                <span className="w-5/6 px-4 py-3 font-bold text-center text-rose-600 ">Sign in with Github</span>
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <p>Do not have Account? <Link className="text-rose-600 font-semibold" to="/register">Register</Link> </p>
                        </div>
                    </div>

                </form>


            </div>

        </div>
    );
};

export default LoginPage;