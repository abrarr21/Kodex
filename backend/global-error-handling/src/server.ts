import app from "./app.js";
import connectDB from "./config/database.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.route.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Hleoo");
});

app.use("/api/auth", authRouter);

app.use(errorMiddleware);

app.listen(6969, () => {
  console.log("Server started at port: 6969");
});
