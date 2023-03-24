import React from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";


function App() {
  // 2
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
