import React from "react";
import { useTasks } from "../../store/TodoProvider";
import Task from "../Task/Task";
// import Task from "./Task";
// import { useTasks } from "./TaskProvider";

export default function TaskList() {
  // 2
  const { tasks } = useTasks();

  return (
    <table>
      <tbody>
        {
          // 3
          tasks.map((task, i) => (
            <>
              <Task key={i} {...task}  i={i}/>
              {/* <button onClick={() => removeTodo(i)}>remove</button> */}
            </>
          ))
        }
      </tbody>
    </table>
  );
}
