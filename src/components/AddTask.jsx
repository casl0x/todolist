import { useState } from "react";

let nextId = 0;

export default function AddTask() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <form 
                className="add-tasks" 
                onSubmit={e => {e.preventDefault()}}
            >
                <label htmlFor="task">New Task</label>
                <input 
                value={newTask} 
                onChange={e => setNewTask(e.target.value)}
                type="text" 
                id="task"
                />
                <button 
                    onClick={() => {
                        setTasks([...tasks, {id: nextId++, newTask: newTask }])
                    }}
                    type="submit"
                    className="btn"
                >Add</button>
            </form>
            <section>
                <h2>Task to do</h2>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.newTask}
                            <button onClick={() => {
                                setTasks(tasks.filter(t => t.id !== task.id));
                            }}
                            >delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}