const express = require("express");
const connectDB = require("./config/db");
const defineRoutes = require("./config/router");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define Routes
defineRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
