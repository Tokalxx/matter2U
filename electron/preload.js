const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  //Create Task Function
  createTask: (newTask) => ipcRenderer.invoke("create-task", newTask),

  //Read Rask Function
  readTask: () => ipcReaderer.invoke("read-items"),
});
