/* eslint-disable no-process-env */
import "dotenv/config";
import express, { json, urlencoded } from "express";
import cors from "cors";
import db from "./models/index.js";

import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 8081;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
console.log("client url", CLIENT_URL);

const corsOptions = { origin: CLIENT_URL };

app.use(cors(corsOptions));
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

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
