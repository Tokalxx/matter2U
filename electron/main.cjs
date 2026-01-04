const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

app.setName("Matter2U");
const dataTasks = path.join(app.getPath("userData"), "m2u_tasks.json");
const dataCat = path.join(app.getPath("userData"), "m2u_Categories.json");
const dataType = path.join(app.getPath("userData"), "m2u_TYPES.json");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const isDev = !app.isPackaged;
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  {
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//Create method that will create my tasks
ipcMain.handle("create-task", (event, newTask) => {
  try {
    let task = [];
    if (fs.existsSync(dataTasks)) {
      const data = fs.readFileSync(dataTasks, "utf8");
      task = JSON.parse(data);
    }

    newTask.id = Date.now();
    task.push(newTask);
    fs.writeFileSync(dataTasks, JSON.stringify(task, null, 2));
    return newTask;
  } catch (error) {
    console.error("Failed to create item:", error);
    throw error;
  }
});

//Read method that will display my tasks
ipcMain.handle("reads-tasks", (event) => {
  try {
    let tasks = [];
    if (fs.existsSync(dataTasks)) {
      const data = fs.readFileSync(dataTasks, "utf8");
      tasks = JSON.parse(data);
    }

    return tasks;
  } catch (error) {
    console.log("Failed to displayed tasks", error);
    return [];
  }
});

//Update method for changing/updating my tasks
ipcMain.handle("update-task", (event, changedTask) => {
  try {
    let tasks = [];
    if (fs.existsSync(dataTasks)) {
      const data = fs.readFileSync(dataTasks, "utf8");
      tasks = JSON.parse(data);
    }

    const index = tasks.findIndex((task) => changedTask.id === task.id);
    if (index !== -1) {
      tasks[index] = changedTask;
      fs.writeFileSync(dataTasks, JSON.stringify(tasks, null, 2));
      //return tasks;
    }
    return null;
  } catch (error) {
    console.log("Failed to updated Task", error);
    throw error;
  }
});

//Delete method for removing my tasks
ipcMain.handle("delete-task", (event, taskId) => {
  try {
    let tasks = [];
    if (fs.existsSync(dataTasks)) {
      const data = fs.readFileSync(dataTasks, "utf8");
      tasks = json.parse(data);
    }

    const index = tasks.filter((task) => task.id === taskId);
    fs.writeFileSync(dataTasks, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.log("failed to delete task", error);
  }
});
