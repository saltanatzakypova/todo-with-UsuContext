import React from "react";
import { useTasks } from "../../store/TodoProvider";
// import { useTasks } from "./TaskProvider";

export default function Task({ id, task, complete, i }) {
  // 2
  const { setStatusTask, removeTodo } = useTasks();

  // 3
  const checkTask = (e) => setStatusTask(id, e.target.checked);

  // 4
  //   const deleteTask = () => removeTodo(id);

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span className={complete ? "task-done" : ""}>{task}</span>
      </td>
      <td>
        <button onClick={() => removeTodo(i)}>delete</button>
      </td>
    </tr>
  );
}
