const connection = require("./src/config/config");
const CrudRoute = require("./src/routes/Route");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", CrudRoute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is listening on port ${process.env.PORT}`);
});
