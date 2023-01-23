import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nevbar } from "./Components/nevbar";
import { ShopcontexProvider } from "./context/shop-contex";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
      <ShopcontexProvider>
        <Router>
          <Nevbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontexProvider>
    </div>
  );
}

export default App;
