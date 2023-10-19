import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCarts from "../Pages/MyCarts/MyCarts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: () => fetch(`http://localhost:5000/products`)
            },
            {
                path: '/products/:brand',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch("http://localhost:5000/products")
            },
            {
                path: '/carts',
                element: <MyCarts></MyCarts>,
                loader: () => fetch('http://localhost:5000/carts')
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }

        ]
    }
])

export default router;