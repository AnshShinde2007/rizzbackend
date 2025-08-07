const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rizzler API Docs',
      version: '1.0.0',
      description: 'API documentation for the Rizzler backend',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./routes/*.js'], // path to your route files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
