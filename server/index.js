const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const { errorHandler } = require('./errorMiddleware');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use user routes
app.use('/api/users', require('./userRoutes'));

// Import and use OpenAI routes
const openaiRoutes = require('./openaiRoutes');
app.use('/api', openaiRoutes);

// Import and use Code Execution routes for the IDE
const codeExecutionRoutes = require('./codeExecutionRoutes');
app.use('/api', codeExecutionRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
