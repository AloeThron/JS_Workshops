import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  return (
    <div className="h-screen bg-white transition-all duration-700 ease-out dark:bg-black dark:transition-all dark:duration-700 dark:ease-out">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
