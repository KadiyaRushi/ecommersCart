import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nevbar } from "./Components/nevbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Nevbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
