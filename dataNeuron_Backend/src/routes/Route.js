const { Add, Get, Update, Count } = require("../controllers/Controllers");
const express = require("express");
const CrudRoute = express.Router();
CrudRoute.get("/", Get);
CrudRoute.post("/add", Add);
CrudRoute.patch("/update/:id", Update);
CrudRoute.get("/count", Count);
module.exports = CrudRoute;
