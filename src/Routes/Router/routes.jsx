import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";


export const router=createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
    },
  ]);