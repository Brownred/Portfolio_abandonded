import { createBrowserRouter } from "react-router-dom";


// File Imports 
import Home from "@/app/home/Home";


/*****************************************************************************************/




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <div>About Page</div>
    }]
    
)