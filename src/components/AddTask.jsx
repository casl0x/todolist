import React, { useState } from "react";
import { useTodo } from "../contexts/TaskContext";

export default function TaskForm({ onAddTask }) {
    const [task, setTask] = useState('');
    const {addTask} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!task) return;
        addTask({ task, completed:false });
        setTask('')
    }

    return (
        <>
            <form 
                className="flex" 
                onSubmit={add}
            >
                <input 
                    type="text" 
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"                
                    value={task} 
                    onChange={e => setTask(e.target.value)}
                    placeholder="Enter Task"
                />
                <button 
                    type="submit"
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                >Add</button>
            </form>
        </>
    );
}