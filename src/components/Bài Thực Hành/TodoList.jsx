import React, { useState } from 'react'

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState('');
    const [ediText, setEditText] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const handleInputChange = (e) => {
        setText(e.target.value);
    };
    const handleAddTodo = () => {
        setTodo([...todo, { text: text, complete: false }]);
    };
    const handleDeleteTodo = (index) => {
        const deleteTodo = [...todo];
        deleteTodo.splice(index, 1);
        setTodo(deleteTodo);
    };
    const handleToggleTodo = (index) => {
        const toggleTodo = todo.map((e, i) => index === i ? { ...e, complete: !e.complete } : e);
        setTodo(toggleTodo);
    };
    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditText(todo[index].text);
    }
    const handleUpdateTodo = () => {
        const updateTodo = [...todo];
        updateTodo[editIndex].text = ediText;
        setTodo(updateTodo);
        setEditIndex(-1);
        setText("");
    }
    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={text} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>ADD</button>
            <ul>
                {todo.map((element, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <div>
                                <input type="text" onChange={(e) => setEditText(e.target.value)} value={ediText} />
                                <button onClick={handleUpdateTodo}>Edit Todo</button>
                                <button onClick={() => setEditIndex(-1)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <span style={{ textDecoration: element.complete ? "line-through" : "none", }}
                                    onClick={() => handleToggleTodo(index)}>{element.text}</span>
                                <button onClick={() => handleEditTodo(index)}>Edit</button>
                                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList