import React, { useState } from "react";
import { useTask } from "../contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
            className="flex"
            onSubmit={add}
        >
            <input 
                type="text"
                className="w-full border border-black/10 rounded-lg bg-white/20 py-1.5 px-3"                
                value={task} 
                onChange={e => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button 
                type="submit"
                className="inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100"
            ><FontAwesomeIcon icon={faPlus} style={{color: "#000000",}} /></button>
            
        </form>
    );
}