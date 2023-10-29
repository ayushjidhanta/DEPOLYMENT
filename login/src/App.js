import "./App.css";
import LoginForm from "./components/Login/loginform";
import Home from "./components/Home/Home";
import Signup from "./components/Login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/checkout";
import Privacy from "./components/PrivacyPolicy/privacy";
import Review from "./components/Review/review";
 
function App() {
  return (
    <BrowserRouter>
     <Routes>
        {/* Routes */}
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
