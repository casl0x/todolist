import { useState } from "react";

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
        <ul>
        {tasks.map(task => (
            <li key={task.id}>
                <Task 
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask} />
            </li>
        ))}
    </ul>
    )
}

function Task ({task, onChange, onDelete}) {
    const [editing, setEditing] = useState(false);
    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.newTask}
                    onChange={ e => {
                        onChange({
                            ...task,
                            newTask: e.target.value
                        });
                    }}
                />
                <button onClick={() => setEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.newTask}
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
                    onChange({
                        ...task,
                        done: e.target.checked
                    })
                }} 
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    )
}