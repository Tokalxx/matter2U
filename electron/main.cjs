const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

app.setName("Matter2U");
const dataTasks = path.join(app.getPath("userData"), "m2u_tasks.json");

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
  }
  elsemainWindow.loadFile("../dist/index.html");
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
    let item = [];
    if (fs.existsSync(dataTasks)) {
      const data = fs.readFileSync(dataTasks, "utf8");
      item = JSON.parse(data);
    }

    newTask.id = Date.now();
    item.push(newTask);
    fs.writeFileSync(dataTasks, JSON.stringify(item, null, 2));
    return newItem;
  } catch (error) {
    console.error("Failed to create item:", error);
    throw error;
  }
});
