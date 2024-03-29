import { useState } from "react";
import { useTodo } from "../ContextTask";

export default function Task ({task}) {
    const [editing, setEditing] = useState(false);
    const [msg, setMsg ] = useState(task.task);
    const {updateTask, deleteTask, toggleComplete} = useTodo();

    const editTask = () => {
        updateTask(task.id, {...task, task: msg });
        setEditing(false);
    };

    const toggleCompleted = () => { toggleComplete(task.id) };

    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input 
                    type="text" 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button 
                    onClick={() => editTask()}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
            {msg}
            <button onClick={() => setEditing(true)}>Edit</button>            
            </>

        )
    }

    return (
        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            {taskContent}
            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </div>
    )
}