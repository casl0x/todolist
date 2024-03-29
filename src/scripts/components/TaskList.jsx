import React, { useState } from "react";
import { useTask } from "../contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

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
            <input 
                type="text"
                className="edit"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />

        );
    } else {
        taskContent = (
            <>
                <p className={`task-content ${task.completed ? "done" : ""}`}>{msg}</p>
            </>
        );
    }

    return (
        <div className= 'task' >
            <input 
                type="checkbox"
                className="check"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            {taskContent}
            <button
                className="btn btn-edit"
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
                {editing ? <FontAwesomeIcon icon={faSquareCheck} style={{color: "#000000",}} /> : <FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} />}
            </button>
            <button
                className="btn btn-delete"
                onClick={() => deleteTask(task.id)}
            >
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#000000",}} />
            </button>                                
        </div>
    )
}