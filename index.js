import express from "express";
import { signupUser, loginUser } from "./controller/user-controller.js";
import connectToMongo from "./db.js";
import cors from "cors";
import DefaultData from "./default.js";
import { fileURLToPath } from "url";
import path from 'path';
import {
  getProducts,
  getProductsById,
} from "./controller/product-controller.js";
import { v4 as uuid } from "uuid";
import bodyParser from "body-parser";
//import DefaultData from "./default.js";
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "login/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "login/build", "index.html"));
  }); 


app.listen(port, () => {
  console.log("Successfully running on ", port);
});

app.use("/signup", router.post("/createuser", signupUser));

app.use("/auth", router.post("/login", loginUser));

app.use("/products", router.get("/getProducts", getProducts));

app.use("/products", router.get("/getProducts/:id", getProductsById));
// app.use("/login", (req, res) => {
//     res.send("login screen");
// })

// DefaultData();
