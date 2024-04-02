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
            className="form"
            onSubmit={add}
        >
            <label htmlFor="add">Add a new task :</label>
            <input 
                type="text"
                id="add"
                name="add task"
                className="input"                
                value={task} 
                onChange={e => setTask(e.target.value)}
                placeholder="enter your task here"
            />
            <button 
                type="submit"
                className="btn btn-add" >
                <FontAwesomeIcon icon={faPlus} className="btn-add-icon" />
            </button>    
        </form>
    );
}