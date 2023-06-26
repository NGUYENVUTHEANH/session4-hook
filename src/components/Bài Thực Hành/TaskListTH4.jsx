import React, { useState } from 'react'

function TaskListTH4() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    function addTask() {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
    function handleChange(event) {
        setNewTask(event.target.value);
    }
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={addTask}>add Task</button>
        </div>
    )
}

export default TaskListTH4