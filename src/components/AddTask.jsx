import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    return (
        <>
            <form 
                className="add-tasks" 
                onSubmit={e => {
                    e.preventDefault();
                    if (text.trim()) {
                        onAddTask(text);
                        setText('');
                    }
                }}
            >
                <label htmlFor="task">New Task</label>
                <input 
                    type="text" 
                    id="task"                
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter Task"
                />
                <button 
                    onClick={() => {
                        setText('');
                        onAddTask(text)
                    }}
                    type="submit"
                    className="btn"
                >Add</button>
            </form>
        </>
    );
}