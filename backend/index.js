const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("../backend/routes/user");
const authRoute = require("../backend/routes/auth");
const productRoute = require("../backend/routes/product");
const cartRoute = require("../backend/routes/cart");
const orderRoute = require("../backend/routes/order");
const stripeRoute = require("../backend/routes/stripe");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running.`);
});
