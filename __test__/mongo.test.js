const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
        });
        db = await connection.db('Swagger_Rental_Cars')
    });
    afterAll(async() => {
        await connection.close()
    })

    it('should insert a new car into the cars collection', async () => {
        const cars = db.collection('cars');

        const mockCar = {
              _id: '660f75091b0bbe82fc5bdb03',
              carMake: "Honda",
              carModel: "Civic",
              carYear: "1980",
              carTag: "123ABC",
              carStatus: "available",
              }

        await cars.insertOne(mockCar)

        const insertedCar = await cars.findOne({ _id: '660f75091b0bbe82fc5bdb03' });

        expect(insertedCar).toEqual(mockCar)
    },
        
    it('should delete a car from the cars collection', async () => {
        const cars = db.collection('cars')
        await cars.deleteMany({ _id: '660f75091b0bbe82fc5bdb03' })
        const deletedCar = await cars.findOne({ _id: '660f75091b0bbe82fc5bdb03' });
        expect(deletedCar).toEqual(null)
    })
)})

