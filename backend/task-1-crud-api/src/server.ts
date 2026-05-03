import app from "./app.js";
import connectDB from "./config/database.js";
import productRouter from "./routes/product.route.js";

connectDB();

app.get("/check-health", (_req, res) => {
  res.json({
    message: "Server's Health ✅",
  });
});

app.use("/product", productRouter);

app.listen(6969, () => {
  console.log("Server started running at port: 6969");
});
