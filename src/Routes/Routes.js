import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`)
                }
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            {path:'/login', element:<Login></Login>},
            {path:'/register', element: <Register></Register>},

        ]
    }
])