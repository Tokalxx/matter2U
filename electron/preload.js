const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  //Create Task
  createTask: (newTask) => ipcRenderer.invoke("create-task", newTask),

  //Read Task
  readTask: () => ipcRenderer.invoke("read-tasks"),

  //Update Task
  updateTask: (updatedTask) => ipcRenderer.invoke("update-task"),

  //Delete Task
  deleteTask: (taskId) => ipcRenderer.invoke("delete-task"),
});
