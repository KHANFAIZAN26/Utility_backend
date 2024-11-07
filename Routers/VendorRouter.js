const express = require("express");
const { Add, Fetch } = require("../Controllers/VendorController");
const Router = express.Router();

Router.post("/add", Add);
Router.get("/get", Fetch);

module.exports = Router;
