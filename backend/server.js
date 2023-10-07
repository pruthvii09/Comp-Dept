require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const userRouter = require("./routes/userRouter");
const quizRouter = require("./routes/quizRouter");
const feesRouter = require("./routes/feesRouter");
const scoreRouter = require("./routes/scoreRouter");
const certificateRouter = require("./routes/certificateRouter");
// Initialize app
const app = express();

// Use middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Routes
app.use("/api/users", userRouter);
app.use("/api/quizzes", quizRouter);
app.use("/api/fees", feesRouter);
app.use("/api/score", scoreRouter);
app.use("/api/certificate", certificateRouter);

// production build servering
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("GDSC api is running!");
  });
}

// Mongodb connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen on app
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
