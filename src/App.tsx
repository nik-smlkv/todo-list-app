import React, { useState } from 'react';
import './style.css';
import TodoList, { TasksType } from './TodoList';

export type FilterValuesType = "all" | "active" | "completed";

function App() {
   let [tasks, setTasks] = useState<Array<TasksType>>([
      { id: 1, name: "HTML", isDone: true },
      { id: 2, name: "CSS", isDone: false },
      { id: 3, name: "JS", isDone: false },
   ]);
   let [filter, setFilter] = useState<FilterValuesType>("all");  

   function removeTask(id: number) {
      let filteredTasks = tasks.filter(t => t.id != id);
      setTasks(filteredTasks);
   }

   function changeFilter(value: FilterValuesType) {
      setFilter(value);
   }
   let tasksForTodoList = tasks;
   if(filter === "completed"){
      tasksForTodoList = tasks.filter(t => t.isDone === true);
   }
   if(filter === "active"){
      tasksForTodoList = tasks.filter(t => t.isDone === false);
   }

   return (
      <div className="App">
         <TodoList title={"Learning Programming Languages"} tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter} />
      </div>
   );
}

export default App;
