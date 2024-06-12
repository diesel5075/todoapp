import React, { useState, useEffect } from 'react';

function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.item);

  useEffect(() => {
    setEditedText(props.item);
  }, [props.item]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(props.item); 
  };

  const handleDelete = () => {
    props.deleteItem(props.index);
  };

  const handleSave = () => {
    props.updateItem(props.index, editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{props.item}</span>
          <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete" onClick={handleDelete}></i>
            <i className="fa-solid fa-pencil icon-edit" onClick={handleEdit}></i>
          </span>
        </>
      )}
    </li>
  );
}

export default Todolist;
