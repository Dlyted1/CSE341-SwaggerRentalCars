const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Swagger Rental Cars API',
    description: 'Swagger Rental Cars API'
  },
  host:  ['localhost:8080', 'cse341-swaggerrentalcars.onrender.com'],
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
