import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/Dashboard/AddProducts";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Home/Products";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
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
            path: '/categories/:id',
            element: <Products></Products>,
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
    
    children: [
        // {
        //     path: '/dashboard',
        //     element: <Dashboard></Dashboard>
        // },
        {
            path: '/dashboard/addProducts',
            element: <AddProducts></AddProducts>
        },
        {
            path: '/dashboard/myProducts',
            element: <MyProducts></MyProducts>
        },
        {
            path: '/dashboard/myOrders',
            element: <MyOrders></MyOrders>
        },
       
        
    ]
}
])

export default router