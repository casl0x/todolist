import { useState } from "react";
import { useTodo } from "../ContextTask";

export default function TaskForm() {
    const [text, setText] = useState('');
    const {addTask} = useTodo();

    const add = (e) => {
        e.preventDefault();
        addTask({ text, completed:false });
        setText('')
    }

    return (
        <>
            <form 
                className="add-tasks" 
                onSubmit={add}
            >
                <label htmlFor="task">New Task</label>
                <input 
                    type="text" 
                    id="task"                
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Task"
                />
                <button 
                    type="submit"
                    className="btn"
                >Add</button>
            </form>
        </>
    );
}