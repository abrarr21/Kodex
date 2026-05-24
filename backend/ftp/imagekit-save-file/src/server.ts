import app from "./app.js";
import connectDB from "./config/database.js";
import fileRouter from "./routes/file.route.js";

connectDB();

app.get("/health", (req, res) => {
  res.send("Health OK");
});

app.use("/api/file", fileRouter);

app.listen(6969, () => {
  console.log("server started at port: 6969");
});
