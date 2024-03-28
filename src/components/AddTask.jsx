import React, { useState } from "react";
import { useTask } from "../contexts";

export default function TaskForm() {
    const [task, setTask] = useState('');
    const {addTask} = useTask();

    const add = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask({ task, completed:false });
        setTask('')
    }

    return (
        <form 
            className="flex gap-4"
            onSubmit={add}
        >
            <input 
                type="text"
                id="input"
                className="py-1.5"                
                value={task} 
                onChange={e => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button 
                type="submit"
                className=""
            >Add</button>
            
        </form>
    );
}