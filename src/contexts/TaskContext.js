import { createContext, useContext } from "react";

export const TodoContext = createContext({
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

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider