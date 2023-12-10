import "./App.css";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Heros />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Footer />
      </div>
    </>
  );
}

export default App;
