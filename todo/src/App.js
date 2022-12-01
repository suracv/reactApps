import React, { useState, useEffect } from "react";
import { isValidElement } from "react";
import Alert from "./Alert";
import "./App.css";
import List from "./List";


const getLocalStorage = () => {
  let list= localStorage.getItem('list');
  if(list){
    return JSON.stringify(localStorage.getItem('list'))
  }else{
    return []
  }
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display  edit

      setAlert({ show: true, msg: "please enter value" });
    } else if (name && isEditing) {
      //deal w edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'success','value changed')
    } else {
      //show alert
      showAlert(true, "success", "item added to list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  useEffect(() =>{
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  return (
    <section className="todo">
      <form className="todoForm" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>todo list page</h3>
        <div className="formControl">
          <input
            type="text"
            placeholder="add todo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submitButton">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="todoContainer">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clearBtn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
