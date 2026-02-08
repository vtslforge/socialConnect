
import HeroLogin from "./Auth/HeroLogin"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const router = createBrowserRouter ([

    { path: "/",
      element: <HeroLogin/>

    },
    {
      path:"/Signup",
      element: <Signup/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }


  ]);

  return <RouterProvider router={router} />;
}
 
export default App
