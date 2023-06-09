import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";
import AddToy from "../Pages/AddToy/AddToy";


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
        ],
    },
]);
export default router