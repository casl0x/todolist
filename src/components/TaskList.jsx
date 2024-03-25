import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TaskContext";

export default function TaskList({}) {
    const tasks = useContext(TasksContext);
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}

function Task ({task}) {
    const [editing, setEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;
    if (editing) {
        taskContent = (
            <>
                <input 
                    type="text"
                    value={task.text}
                    onChange={ e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
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
                    dispatch({
                        type: 'changed',
                        task: {
                        ...task,
                        done: e.target.checked
                        }
                    });
                }} 
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type:'deleted',
                    id: task.id
                })
            }}>
                Delete
            </button>
        </label>
    )
}