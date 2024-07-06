import React, { useState, useEffect } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(()=>{
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        return storedTasks || [];
    });
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function handleDeleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }
    function handleTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function handleTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <span>
                <input type="text"
                    placeholder="Enter Your Task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-btn" onClick={handleAddTask}>Add</button>
            </span>
           <div className="task-list">
           <ol>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <span>{task}</span>
                            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
                            <button className="up-btn" onClick={() => handleTaskUp(index)}>👆</button>
                            <button className="down-btn" onClick={() => handleTaskDown(index)}>👇</button>
                        </li>
                    ))
                }
            </ol>
           </div>
        </div>
    );
}
export default ToDoList;