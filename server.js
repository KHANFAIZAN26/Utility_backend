const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 1001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/vendor", require("./Routers/VendorRouter"));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
