import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import {TasksProvider} from "./components/TaskContext";

export default function TodoList() {
  return (
    <TasksProvider>
      <h1>What do you have to do ?</h1>
      <AddTask/>
      <TaskList/> 
    </TasksProvider>
  );
}