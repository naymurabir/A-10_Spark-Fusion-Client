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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <UpdateProduct></UpdateProduct> </PrivateRoute>,
                loader: () => fetch(`https://spark-fusion-server.vercel.app/products`)
            },
            {
                path: '/products/:brand',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://spark-fusion-server.vercel.app/products/${params.brand}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <ProductDetails></ProductDetails> </PrivateRoute>,
                loader: () => fetch("https://spark-fusion-server.vercel.app/products")
            },
            {
                path: '/carts',
                element: <PrivateRoute> <MyCarts></MyCarts> </PrivateRoute>,
                loader: () => fetch('https://spark-fusion-server.vercel.app/carts')
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