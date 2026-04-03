import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import WelcomePage from "../screens/WelcomePage";
import ProductDetail from "../screens/ProductDetail";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
};

export default AppRoute;
