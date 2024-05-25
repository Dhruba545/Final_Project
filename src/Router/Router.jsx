import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Menu from "../Pages/Menu/Mune.jsx/Menu";
import Ordered from "../Pages/Ordered/Ordered";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/menu",
          element:<Menu></Menu>
        },{
          path:"/order" ,
          element:<Ordered></Ordered>
        }
      ]
    },
  ]);

export default router;