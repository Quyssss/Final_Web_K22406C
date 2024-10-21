const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

// Thiết lập tùy chọn strictQuery
mongoose.set('strictQuery', false);

app.use(cors(
    {
      origin: "http://localhost:4200"
    }
   
  ));

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/User_Web")
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((error) => {
        console.log("DB Connection Error:", error);
    });

// Lắng nghe trên cổng 8087
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
