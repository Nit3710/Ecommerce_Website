const express = require('express')
const mongoose = require("mongoose");
const app = express();

// extracting the environment variable
const dotenv = require('dotenv');
dotenv.config();


//routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')

//database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("database is connected"))
    .catch((err) => console.log(err))
const PORT = process.env.PORT || 3000;
app.get("/api/test", (req, res) => {
    console.log("this is the home page")
})

// allow routes middleware
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

