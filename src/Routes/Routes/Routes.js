
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/home";
import Login from "../../pages/Login/Login";
import SignUP from "../../pages/SignUP/SignUP";





const router = createBrowserRouter([
    {
        path: '/',
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
                path: '/signup',
                element: <SignUP></SignUP>
            },
            {
                path: '/Appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])
export default router;