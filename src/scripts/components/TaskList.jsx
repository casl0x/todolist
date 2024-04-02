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
                className="editing"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />

        );
    } else {
        taskContent = (
            <>
                <p className={`text ${task.completed ? "done" : ""}`}>{msg}</p>
            </>
        );
    }

    return (
        <div className={`task ${task.completed ? "task-done" : ""}`} >
            <div className="content">
                <input 
                    type="checkbox"
                    name="check task"
                    className="check"
                    checked={task.completed}
                    onChange={toggleCompleted}
                />
                {taskContent}                
            </div>
            <div>
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
                    {editing ? <FontAwesomeIcon icon={faSquareCheck} className="btn-edit-done" /> : <FontAwesomeIcon icon={faPenToSquare} className="btn-edit-editing" />}
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => deleteTask(task.id)}
                >
                    <FontAwesomeIcon icon={faTrashCan} className="btn-delete-icon" />
                </button>                 
            </div>
                               
        </div>
    )
}