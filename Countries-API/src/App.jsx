import "./App.css";
import ContriesAPI from "./API/Contries";

function App() {
  return (
    <>
      <div className="mt-10 flex justify-center">
        <h1 className="text-4xl font-bold">Cuntries</h1>
      </div>
      <div>
        <ContriesAPI />
      </div>
    </>
  );
}

export default App;
