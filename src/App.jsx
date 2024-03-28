import { useEffect, useState } from "react";
import './app.css'
import { TodoProvider } from "./contexts/TaskContext";
import TaskForm from "./components/AddTask";
import Task from "./components/TaskList";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prev) => [...prev, {id: Date.now(), ...task}])
    }

    const updateTask = (id, task) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? task : t )))
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id ))
    }

    const toggleComplete = (id) => {
        setTasks((prev) => 
            prev.map((t) => t.id === id ? {...t, completed: t.completed } : t)
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
        <TodoProvider value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}>
            <div className="min-h-screen py-8">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">What do you have to do ?</h1>
                <TaskForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {tasks.map((task) => (
                    <div key={task.id}>
                        <Task task={task}/>
                    </div>
                ))}
            </div>
        </TodoProvider>
    );
}
