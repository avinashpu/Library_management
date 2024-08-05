require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/database/db');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();

// Middleware
 app.use(cors());
 app.use(express.json());

connectDB();

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
