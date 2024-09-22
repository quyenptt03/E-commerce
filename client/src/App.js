import Home from "./pages/ADMIN/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Shop from "./pages/ADMIN/shop/Shop";
import ShopDetail from "./pages/ADMIN/shopDetail/ShopDetail";
import New from "./components/new/New";
import Profile from "./components/profile/Profile";
import User from "./pages/ADMIN/user/User.jsx";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import { shopInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/index.css";
import CheckShop from "./pages/ADMIN/checkShop/CheckShop";
import UserDetail from "./pages/ADMIN/UserDetail/UserDetail";
import Stats from "./pages/ADMIN/Stats/Stats";
import Chat from "./pages/ADMIN/Mess/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar.jsx";
import { chatLoader } from "./lib/loaders.js";
import Advertisement from "./pages/ADMIN/advertisement/Advertisement.jsx";
import CheckUser from "./pages/ADMIN/checkUser/CheckUser.jsx";
import Category from "./pages/ADMIN/category/Category.jsx";
import CategoryDetail from "./pages/ADMIN/category/CategoryDetail.jsx";
import BasicTabs from "./pages/ADMIN/menu_Item/Tab.jsx";
import Product from "./pages/ADMIN/product/Products.jsx";
import ProductDetail from "./pages/ADMIN/product/productDetail.jsx";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const Layout = () => {
  
    return (
          <div className="list">
              <Sidebar/>
              <div className="listContainer">
                <Navbar/>
                <div className="Outlet">
                <Outlet />
                </div>
              </div> 
          </div>
    );
  };
  const router = createBrowserRouter([
        
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "/check-shop",
          element: <CheckShop />,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
        {
          path: "/mess",
          element: <Chat />,
          loader: chatLoader, 
        },
        {
          path: "/shops",
          element: <Shop />,
        },
        {
          path: "/shops/:shopId",
          element: <ShopDetail />,
        },
        {
          path: "/shops/new",
          element: <New inputs={shopInputs} title="Add new Shop" userType="shop"/>,
        },
        {
          path: "/users",
          element: <User />,
        },
        {
          path: "/users-check",
          element: <CheckUser />,
        },
        {
          path: "/users/:userId",
          element: <UserDetail />,
        },
        {
          path: "/users/new",
          element: <New inputs={userInputs} title="Add new user" userType="user"/>,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/products/new",
          element: <New inputs={shopInputs} title="Add New Product" />,
        },
        {
          path: "/advertisement",
          element: <Advertisement/>,
        },
        {
          path: "/categories",
          element: <Category/>,

        },
        {
          path: "/categories/:categoriesId",
          element: <CategoryDetail/>,
        },
        {
          path: "/menu_item",
          element: <BasicTabs/>,
        },
      ],
    },

  ]);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
