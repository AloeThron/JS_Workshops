import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Member from "./pages/Member";
import Product from "./pages/Product";
import Admin from "./pages/Admin";

function App() {

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Member" element={<Member />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}

export default App;
