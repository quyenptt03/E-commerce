import Home from "./pages/ADMIN/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Shop from "./pages/ADMIN/shop/Shop";
import ShopDetail from "./pages/ADMIN/shopDetail/ShopDetail";
import New from "./components/new/New";
import Profile from "./components/profile/Profile";
import User from "./pages/ADMIN/user/User.jsx";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import { shopInputs, userInputs,productInputs,shipmentInputs } from "./formSource";
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
import Shipments from "./pages/ADMIN/shipment/Shipment.jsx";
import ShipmentDetail from "./pages/ADMIN/shipment/shipmentDetail.jsx";


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
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Home />,
        },
        {
          path: "/admin/profile",
          element: <Profile />,
        },
        {
          path: "/admin/check-shop",
          element: <CheckShop />,
        },
        {
          path: "/admin/stats",
          element: <Stats />,
        },
        {
          path: "/admin/mess",
          element: <Chat />,
          loader: chatLoader, 
        },
        {
          path: "/admin/shops",
          element: <Shop />,
        },
        {
          path: "/admin/shops/:shopId",
          element: <ShopDetail />,
        },
        {
          path: "/admin/shops/new",
          element: <New inputs={shopInputs} title="Add new Shop" userType="shop"/>,
        },
        {
          path: "/admin/users",
          element: <User />,
        },
        {
          path: "/admin/users-check",
          element: <CheckUser />,
        },
        {
          path: "/admin/users/:userId",
          element: <UserDetail />,
        },
        {
          path: "/admin/users/new",
          element: <New inputs={userInputs} title="Add new user" userType="user"/>,
        },
        {
          path: "/admin/products",
          element: <Product />,
        },
        {
          path: "/admin/products/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/admin/products/new",
          element: <New inputs={productInputs} userType="product" title="Add New Product" />,
        },
        {
          path: "/admin/advertisement",
          element: <Advertisement/>,
        },
        {
          path: "/admin/categories",
          element: <Category/>,

        },
        {
          path: "/admin/categories/:categoriesId",
          element: <CategoryDetail/>,
        },
        {
          path: "/admin/menu_item",
          element: <BasicTabs/>,
        },
        {
          path: "/admin/shipments",
          element: <Shipments/>,
        },
        {
          path: "/admin/shipments/new",
          element: <New inputs={shipmentInputs} userType="shipment" title="Add New Shipment" />,
        },
        {
          path: "/admin/shipments/:id",
          element: <ShipmentDetail/>,
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
