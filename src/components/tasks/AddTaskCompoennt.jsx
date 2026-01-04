import React, { useEffect, useState } from "react";
import "./Task_Logic";
import { handleSave } from "./Task_Logic";

export default function AddTaskCompoennt() {
  const [task, setTask] = useState([]);

  return (
    <div>
      <label>
        Name
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </label>

      <label>
        Details
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </label>

      <label>
        End Date
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </label>

      <label>
        Repeat
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </label>

      <label>
        Priority
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </label>

      <button type="button" onClick={() => handleSave(task)}>
        Create
      </button>
    </div>
  );
}
