// components imports
import Navigation from "./application/components/Navigation/Navigation";
import Home from "./application/pages/Home/Home";
import Footer from "./application/components/Footer/Footer";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./application/pages/Register/Register";
import Login from "./application/pages/Login/Login";
import { useEffect } from "react";
import { checkAuth } from "./application/redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Store from "./application/pages/Store/Store";
import Product from "./application/components/Product/Product";
import Cart from "./application/components/Cart/Cart";
import { getTotalPrice } from "./application/redux/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getTotalPrice());
  }, []);

  return (
    <BrowserRouter>
      <div className="sneakers-ecommerce">
        <CssBaseline />
        <Navigation />
        <Cart />
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/store"} element={<Store />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path={"/product/:id"} element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
