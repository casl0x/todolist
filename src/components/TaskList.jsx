import { useState } from "react";

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task 
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task ({task, onChange, onDelete}) {
    const [editing, setEditing] = useState(false);
    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.text}
                    onChange={ e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }}
                />
                <button onClick={() => setEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input 
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onchange({
                        ...task,
                        done: e.target.checked
                    });
                }} 
            />
            {taskContent}
            <button onClick={() => onDelete(task.id) }>
                Delete
            </button>
        </label>
    )
}