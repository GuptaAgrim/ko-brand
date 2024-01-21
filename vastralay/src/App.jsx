import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";

function App() {
  return (
    <MyState>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/updateProduct" element={<UpdateProduct/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/productinfo/:id' element={<ProductInfo />} />
        <Route path="/*" element={<NoPage />} />
        
      </Routes>
    </Router>
    </MyState>
    
  );
}

export default App;
