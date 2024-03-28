import React, { useState } from "react";
import { useTask } from "../contexts";

export default function Task ({task}) {
    const [editing, setEditing] = useState(false);
    const [msg, setMsg ] = useState(task.task)
    const {updateTask, deleteTask, toggleComplete} = useTask();

    const editTask = () => {
        updateTask(task.id, {...task, task: msg });
        setEditing(false);
    };

    const toggleCompleted = () => { 
        toggleComplete(task.id) 
    };

    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.text}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button onClick={() => setEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {msg}
                <button onClick={() => setEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <div className={`flex text-black 
        ${ task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }`} >
            <input 
                type="checkbox"
                className="cursor-pointer"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            {msg}
            <button 
                onClick={() => {
                    if (task.completed) return;
                    if (editing) {
                        editTask();
                    } else {
                        setEditing((prev) => !prev);
                    }
                }}
                disabled={task.completed}
            >
                {editing ? 'Save' : 'Edit'}
            </button>

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </div>
    )
}