import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const RegisterPage = () => {

    const { createUser, logOut } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const termsAccepted = form.get('terms');


        if (password.length < 6) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password must be 6 characters long.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password must have at least one Upper case letter.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }
        else if (!/[@#$%^&+=!]/.test(password)) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Password must have a special character. [hints: @#$%^&+=!]',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }
        else if (!termsAccepted) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Please accept our terms and conditions before register.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '50px',
                color: 'white',
                timer: 2000
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User has been registered successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })

                // Update user profile
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log("Profile updated.");
                        navigate('/login')
                        logOut()
                    })
                    .catch(error => {
                        swal(error.message)
                    })

                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                swal(error.message)
            })
    }


    return (
        <div>
            <div>
                <form onSubmit={handleRegister}>
                    <h2 className="font-bold text-center text-[#CE1446] text-xl mt-3 md:mt-5">Register your account</h2>

                    <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Input your name..."
                                className="input text-sm input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Photo url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Input your photo url..."
                                className="input text-sm input-bordered"
                                required />
                        </div>

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

                            <div className="flex gap-2 items-center mt-2">
                                <input type="checkbox" name="terms" id="" />
                                <label className="text-sm font-semibold" htmlFor="terms"> Terms and Conditions. </label>
                            </div>

                        </div>

                        <div className="form-control mt-2">
                            <button className="bg-[#CE1446] text-white px-2 py-1 rounded hover:bg-rose-400">Register</button>
                        </div>

                        <div className="text-center mt-2">
                            <p>Already have an Account? <Link to="/login" className="text-[#CE1446] font-semibold" >Login</Link> </p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default RegisterPage;