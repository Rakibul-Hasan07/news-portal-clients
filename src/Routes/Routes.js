import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: [
            { path: '/', element: <Home></Home> },
            {path:'/news/:id', element:<News></News>},
            {path:'/category/:id', element:<Category></Category>},
            
        ]
    }
])