import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""})
  const [checkEdit, setCheckEdit] =useState(false)
  const [editId, setEditId] = useState(null)

  function submitData(e) {
    e.preventDefault();
    if (!name) {
      setAlert({show: true, msg: "Content is none.", type: "error"})
    }
    else if (checkEdit && name) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return {...item, title: name}
        }
        return item
      })
      setList(result)
      setName("")
      setCheckEdit(false)
      setEditId(null)
      setAlert({show: true, msg: "Edit Done", type: "complete"})
    }
    else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({show: true, msg: "Success", type: "complete"})
    }
  }
  function editItem(id) {
    setCheckEdit(true)
    setEditId(id)
    const search = list.find((item) => item.id === id)
    setName(search.title)
  }

  function removeItem(id) {
    const result = list.filter((item) => item.id !== id)
    setList(result)
    setAlert({show: true, msg: "Delete complete", type: "error"})
  }

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded-md shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-8">
            <h1 className="text-grey-darkest text-center font-bold text-4xl my-10">
              Todo List App
            </h1>
            <div className="flex mt-4 mb-2">
              <input
                className="shadow appearance-none border rounded-md w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <button
                className={`flex-no-shrink p-2 border-2 rounded-md text-teal border-teal ${checkEdit ? "hover:text-orange-600" : "hover:text-blue-600"} hover:font-bold hover:bg-teal`}
                onClick={submitData}
              >
                {checkEdit ? "Edit" : "Add"}
              </button>
            </div>

            <div>
              {alert.show && <Alert list={list} setAlert={setAlert} {...alert} />}
            </div>
          </div>

          <div>
            <div>
              {list.map((item) => (
                <div key={item.id}>
                  <TodoList id={item.id} title={item.title} editItem={editItem} removeItem={removeItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
