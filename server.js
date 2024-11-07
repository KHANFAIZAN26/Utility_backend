const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Connections/DBConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({
  origin:"*",
}))
app.use(bodyParser.json());

app.use("/api/vendor", require("./Routers/VendorRouter"));

db.query("SELECT 1").then((result) => {
  console.log("DB is Connected")
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}).catch((err) => {
  console.log(err)
});


