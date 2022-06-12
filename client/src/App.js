// components imports
import Navigation from "./application/components/Navigation/Navigation";
import Home from "./application/pages/Home/Home";
import Footer from "./application/components/Footer/Footer";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./application/pages/Register/Register";
import Login from "./application/pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="sneakers-ecommerce">
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
