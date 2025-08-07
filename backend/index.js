const express = require('express');
const cors = require('cors');
require('dotenv').config();

const rizzRoutes = require('./routes/rizz');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // path may vary

const app = express();
app.use(cors());
app.use(express.json());

// Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/rizz', rizzRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/docs`);
});
