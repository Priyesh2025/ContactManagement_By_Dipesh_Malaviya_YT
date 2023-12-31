const express = require("express");             

const dotenv = require("dotenv").config();      // for accessing contents from .env files

const app = express();

const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./Middleware/errorHandler");

connectDB();           // to establish connection with mongoDB database

const port = process.env.PORT || 5000;

app.use(express.json());        // helps us to parse the data stream we accept from the client

app.use("/api/contacts",contactRoutes);     // app.use() helps us using middleware
app.use("/api/user",userRoutes);

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});