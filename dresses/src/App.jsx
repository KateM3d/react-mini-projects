import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link to="/team" className="link">
          Team
        </Link>
        <Link to="/contact" className="link">
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
