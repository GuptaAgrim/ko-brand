import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
    </MyState>
    
  );
}

export default App;
