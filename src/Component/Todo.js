import React, { useState, useEffect, useRef } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editItems, setEditItems] = useState(null);

  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const addItem = () => {
    if (!todo) {
      alert("fill the data");
    } else if (todo && !toggle) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItems) {
            return { ...elem, name: todo };
          }
          return elem;
        })
      );
      setTodo("");
      setToggle(true);
      setEditItems(null);
    } else {
      setItems([...items, { id: new Date().getTime().toString(), name: todo }]);
      setTodo("");
    }
  };
  const deleteItem = (idd) => {
    // console.log("Delete item");
    const updateTodo = items.filter((elem) => {
      return elem.id !== idd;
    });
    setItems(updateTodo);
    if(editItems === idd){
      setTodo('')
    }

  };
  const editItem = (idd) => {
    const editItem = items.find((elem) => {
      return elem.id === idd;
    });
    console.log(editItem);
    setTodo(editItem.name);
    setToggle(false);
    setEditItems(idd);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div>
        <div>
         
          <input
            type=""
            id="input"  
            ref={inputFocus}
            placeholder="Add items"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {toggle ? (
            <button href="#" class="btn btn-roll" onClick={addItem}>
            Add
          </button>
          ) : (
            <button className="btnn" onClick={addItem}>Edit</button>
          )}
        </div>
        <div>
        
          {items.map((curElem) => {
            return (
              <>
                <div id="main" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <button className="editbtn" onClick={() => editItem(curElem.id)}>Edit</button>
                  <button className="editbtn" onClick={() => deleteItem(curElem.id)}>Delete</button>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <button className="custom-btn btn-3" onClick={removeAll}>Clear All</button>
        </div>
      </div>
    </>
  );
};


export default Todo;
