require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/database/db');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();

// Middleware
const corsOptions = {
    origin: '*',  // Replace with your frontend URL or an array of URLs
    Credential:true,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    allowedHeaders: 'Content-Type, Authorization',
  };
  app.use(cors(corsOptions));
 app.use(express.json());

connectDB();

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));