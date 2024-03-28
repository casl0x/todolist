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
                className="w-full border-gray-200 shadow-sm"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />

        );
    } else {
        taskContent = (
            <>
                <p className={`w-full bg-transparent ${task.completed ? "line-through" : ""}`}>{msg}</p>
            </>
        );
    }

    return (
        <div className= 'flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black' >
            <input 
                type="checkbox"
                className="cursor-pointer accent-emerald-500/25"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            {taskContent}
            <button
                className="inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100"
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
                className="inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => deleteTask(task.id)}
            >
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#000000",}} />
            </button>                                
        </div>
    )
}