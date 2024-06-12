import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from '../src/components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  console.log(listTodo,"gggggggggggg")
  const addList = (inputText) => {
    if (inputText.trim() !== '') setListTodo([...listTodo, inputText]);

    };
    
    const deleteListItem = (key) => {
      const newListTodo = [...listTodo];
      newListTodo.splice(key, 1);
      setListTodo(newListTodo);
      };
      
      const updateListItem = (index, newText) => {
        // const newListTodo = [...listTodo];
        listTodo[index] = newText;
        setListTodo(listTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            updateItem={updateListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
