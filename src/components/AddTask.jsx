import { useContext, useState} from "react";
import { TasksDispatchContext } from "./TaskContext";

export default function AddTask({}) {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);

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
                    value={text} 
                    onChange={e => setText(e.target.value)}
                />
                <button 
                    onClick={() => {
                        setText('');
                        dispatch({
                            type: 'added',
                            id: nextId++,
                            text: text,
                        })
                    }}
                    type="submit"
                    className="btn"
                >Add</button>
            </form>
        </>
    );
}

let nextId = 3;