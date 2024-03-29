const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Swagger Rental Cars API',
    description: 'Swagger Rental Cars API'
  },
  host: 'project1-h052.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
