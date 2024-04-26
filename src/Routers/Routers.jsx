import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import Restrict from "../PrivateRoute/Restrict/Restrict";
import MyCraftAndList from "../Pages/MyCraftAndList/MyCraftAndList";
import ErrorPage from "../ErrorPage/ErrorPage";
import Update from "../Components/Update/Update";



    const router=createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<LogIn></LogIn>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/addcraft',
                    element:<Restrict><AddCraft></AddCraft></Restrict>
                },
                {
                    path:'/mycraft',
                    element:<Restrict><MyCraftAndList></MyCraftAndList></Restrict>
                },
                {
                    path:'/update/:id',
                    element:<Restrict><Update></Update></Restrict>,
                    loader:({params})=> fetch(`http://localhost:4545/crafts/${params.id}`)
                }
            ]
                
            
        }
    ])


export default router;