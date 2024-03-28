import { useEffect, useState } from "react";
import './app.css'
import { TaskProvider } from "./contexts";
import TaskForm from "./components/AddTask";
import Task from "./components/TaskList";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prev) => [...prev, {id: Date.now(), ...task}])
    }

    const updateTask = (id, task) => {
        setTasks((prev) => prev.map((prevTask) => (prevTask.id === id ? task : prevTask )))
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id ))
    }

    const toggleComplete = (id) => {
        setTasks((prev) => 
            prev.map((prevTask) => prevTask.id === id ? {...prevTask, completed: !prevTask.completed } : prevTask)
        )
    }

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"))
        if (storedTasks && storedTasks.length > 0) {
            setTasks(storedTasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return (
        <TaskProvider value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}>
            <div className="py-8">
                <div className="w-full mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">What do you have to do ?</h1>
                    <div className="px-4">
                       <TaskForm />                        
                    </div>
                </div>
                <div>
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <Task task={task}/>
                        </div>
                    ))}
                </div>                
            </div>

        </TaskProvider>
    );
}
