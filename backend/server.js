require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const reviewRoutes = require("./routes/reviews");

// express app
const app = express();

// cors config
app.use(
  cors({
    origin: "https://knayad.github.io/portfolio/",
    credentials: true,
  })
);

// global middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes (technically middleware); no last slash
// app.use("/api/reviews", reviewRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to the DB and listening on port 4000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
