import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/Dashboard/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Home/Products";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import Blog from "../../Pages/Shared/Blog";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/categories/:id',
            element: <PrivateRoute><Products></Products></PrivateRoute>,
            loader: ({ params }) =>
          fetch(
            `http://localhost:5000/categories/${params.id}`
          ),
        },
    ]
},

{
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        // {
        //     path: '/dashboard',
        //     element: <Dashboard></Dashboard>
        // },
        {
            path: '/dashboard/addProducts',
            element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
        },
        {
            path: '/dashboard/myProducts',
            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
        },
        {
            path: '/dashboard/myOrders',
            element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
        },
        {
            path:'/dashboard/allSellers',
            element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
        },
        {
            path:'/dashboard/allBuyers',
            element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
            path: '/dashboard/payment/:id',
            element: <Payment></Payment>,
            loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        },
       
        
    ]
}
])

export default router