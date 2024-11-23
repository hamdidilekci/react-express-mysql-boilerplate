/* eslint-disable no-process-env */
import "dotenv/config";
import express, { json, urlencoded } from "express";
import db from "./models/index.js";

// ReferenceError: __dirname is not defined in ES module scope

import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 8081;

app.use(json({ limit: "20mb" }));
app.use(urlencoded({ extended: true }));

// Serve the static files from the React app's dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all handler for any routes not handled by static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use("/", routes);

db.sequelize.sync();

// Function to start the server
export function startServer() {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, () => {
      console.log(`Express server running on port: ${PORT}`);
      resolve(server);
    });

    server.on("error", (err) => {
      console.error("Error starting Express server:", err);
      reject(err);
    });
  });
}
