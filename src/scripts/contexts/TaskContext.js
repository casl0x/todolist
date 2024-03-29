import { createContext, useContext } from "react";

export const TaskContext = createContext({
    tasks : [
        {
            id: 1,
            task: "todo title" ,
            completed: false,
        }
    ],
    addTask : (task) => {},
    updateTask : (id, task) => {},
    deleteTask : (id, task) => {},
    toggleComplete : (id) => {}
})

export const useTask = () => {
    return useContext(TaskContext)
}

export const TaskProvider = TaskContext.Provider