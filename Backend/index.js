require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/database/db');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();

// Middleware
const corsOptions = {
    origin: '*', 
    Credential:true,
    methods: ["GET","PUT","POST","DELETE"],
    allowedHeaders: 'Content-Type, Authorization',
  };
  app.use(cors(corsOptions));
 app.use(express.json());

connectDB();

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));