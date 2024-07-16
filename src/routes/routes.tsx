import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PostPage from "../Pages/PostPage/PostPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '', element: <Home/>
            },
            {
                path: '/post/:id', element: <PostPage/>
            },
        ]
    },  
    
    {
        path: '*',
        element: <ErrorPage/>
    }
])