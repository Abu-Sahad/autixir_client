import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";
import AddToy from "../Pages/AddToy/AddToy";
import ShowToy from "../Pages/ShowToy/ShowToy";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../Pages/MyToy/MyToy";
import UpdatedToy from "../Pages/UpdatedToy/UpdatedToy";
import NotFound from "../Pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>,
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>,
            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>,
            },
            {
                path: '/showToy',
                element: <ShowToy></ShowToy>,
                loader: () => fetch('https://autixir-two.vercel.app/addToy')
            },
            {
                path: '/addToy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://autixir-two.vercel.app/addToy/${params.id}`)
            },
            {
                path: '/myToy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdatedToy></UpdatedToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://autixir-two.vercel.app/addToy/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ],
    },
]);
export default router