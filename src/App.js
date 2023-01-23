import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nevbar } from "./Components/nevbar";
import { Cart } from "./pages/cart";
import { Shop } from "./pages/shop";
function App() {
  return (
    <div className="App">
      <Router>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
