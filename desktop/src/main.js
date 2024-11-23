const { app, BrowserWindow } = require("electron");

const { fork } = require("child_process");

// Import the Express server function
const { startServer } = require("../app");

let mainWindow;

// Start Express server and create Electron window
async function createWindow() {
  try {
    await startServer();

    // Create the Electron browser window
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    // Load the React app served by Express
    mainWindow.loadURL("http://localhost:8081");

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  } catch (err) {
    console.error("Failed to start the server or Electron app:", err);
    app.quit();
  }
}

// App lifecycle
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
