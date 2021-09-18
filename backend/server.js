if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// connection to database;
connectDB();

let port = process.env.PORT || 5000; 

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/borrowing", require("./routes/api/borrowing"));
app.use("/api/expense", require("./routes/api/expense"));
app.use("/api/income", require("./routes/api/income"));
app.use("/api/loan", require("./routes/api/loan"));


app.listen(port, () => console.log(`Server runing on port ${port}`));