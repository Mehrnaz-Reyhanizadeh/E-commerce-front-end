import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Store from "./Components/Store/Store";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Navbar from "./Components/Navbar/Navbar";
import CheckOut from "./Components/CheckOut/CheckOut";
// import Login from "./Components/Login/Login";
// import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/panelForm/Login/Login";
import SignUp from "./Components/panelForm/SignUp/SignUp";
import CreateProduct from "./Components/dashboard/Admin/CreateProduct/CreateProduct";
import Dashboard from "./Components/dashboard/Dashboard/Dashboard";
import UserManagement from "./Components/dashboard/UserManagement/UserManagement";
// context
import ContextProductsProvider from "./context/ContextProductsProvider";
import CartContextProvider from "./context/CartContextProvider";
import ContextUserProvider from "./context/ContextUserProvider";

function App(props) {
  const [navData, setNavData] = useState("");

  return (
    <ContextUserProvider>
      <ContextProductsProvider>
        <CartContextProvider>
          <Navbar passNavData={setNavData} />
          <Routes>
            <Route
              path="/dashboard/CreateProduct"
              element={<CreateProduct />}
            />
            <Route
              path="/dashboard/usermanagement"
              element={<UserManagement />}
            />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/products/:id" element={<ProductDetails />} />

            {/* <Route
            path="/products/:id"
            element={<ProductDetails />}
          /> */}
            {/* <Route path="products">
            <Route index={false} path=":id" element={<ProductDetails />} />
            <Route index={true} element={<Store navData={navData} />} />
          </Route> */}
            <Route path="/products" element={<Store navData={navData} />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/products" replace />} />
          </Routes>
        </CartContextProvider>
      </ContextProductsProvider>
    </ContextUserProvider>
  );
}

export default App;
