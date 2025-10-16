import express from "express";
const app = express();

// Health check route
app.get("/", (req, res) => {
  res.status(200).send("Rizz backend is alive");
});
