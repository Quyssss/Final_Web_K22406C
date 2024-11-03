const express = require('express');
const PORT = 8088;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

mongoose.set('strictQuery', false);

app.use(cors(
    {
      origin: "http://localhost:4200"
    }
   
  ));

mongoose.connect("mongodb://127.0.0.1:27017/User_Web")
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((error) => {
        console.log("DB Connection Error:", error);
    });

app.listen(8088, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Port Connected! 8088");
    }
});
app.use(express.json());
app.use(cors());
app.use(routes);
