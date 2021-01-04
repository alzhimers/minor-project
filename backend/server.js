require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
//importing routes
const authRoute = require('./routes/auth')

//importing middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//multer-image-upload-config


const app = express();
const port = process.env.PORT || 5500;

//connecting to DATABASE
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch(err=>{
      console.log("DB-ERROR:",err)
  })

//middlewares to run after connection established
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//ROUTES
app.use("/api", authRoute);


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
