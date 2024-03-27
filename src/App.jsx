import { useEffect, useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function TodoList() {
  const [tasks, dispatch] = useReducer( tasksReducer, initialTasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks){
      dispatch({type: 'load', tasks: storedTasks})
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>What do you have to do ?</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      /> 
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type){
      case 'added': {
          return [...tasks, {
              id: action.id,
              text: action.text,
              done: false
          }];
      }
      case 'changed' : {
          return tasks.map( t => {
              if (t.id === action.task.id) {
                  return action.task;
              } else {
                  return t; 
              }                
          });
      }
      case 'deleted' : {
          return tasks.filter(t => t.id !== action.id);
      }
      case 'load': {
        return action.tasks;
      } 
      default: {
          throw Error('Uncknow action: ' + action.type);
      }
  }
}

let nextId = 0;
const initialTasks = [];