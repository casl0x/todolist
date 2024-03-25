import { useState} from "react";

let nextId = 0;

export default function AddTask({ onAdd }) {
    const [newTask, setNewTask] = useState('');

    return (
        <>
            <form 
                className="add-tasks" 
                onSubmit={e => {e.preventDefault()}}
            >
                <label htmlFor="task">New Task</label>
                <input 
                    type="text" 
                    id="task"                
                    value={newTask} 
                    onChange={e => setNewTask(e.target.value)}
                />
                <button 
                    onClick={() => {
                        setTasks('');
                        onAdd(newTask);
                    }}
                    type="submit"
                    className="btn"
                >Add</button>
            </form>
        </>
    );
}