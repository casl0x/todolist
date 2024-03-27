import { useState } from "react";
import { useTodo } from "../ContextTask";

export default function Task ({task}) {
    const [editing, setEditing] = useState(false);
    const [msg, setMsg ] = useState(task.task)
    const {updateTask, deleteTask, toggleComplete} = useTodo();

    const editTask = () => {
        updateTask(task.id, {...task, task: msg });
        setEditing(false);
    };

    const toggleCompleted = () => { toggleComplete(task.id) }

    return (
        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            <input 
                type="text" 
                className= {`${editing ? "edit-task" : "task"} ${task.completed ? "task-done" : "" }`} 
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!editing}
            />
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