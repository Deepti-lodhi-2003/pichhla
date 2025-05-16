
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes.js");
const contactRoutes = require("./routes/contact.routes.js");
const razorpayRoutes = require("./routes/payment.routes.js");
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser"); 

app.use(morgan("tiny")); 

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:5173',
   
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser()); 

app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/contact", contactRoutes);
app.use('/razorpay', razorpayRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
