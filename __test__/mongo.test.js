const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('cars')
    });
    afterAll(async() => {
        await connection.close()
    })

    it('should insert a new car into the cars collection', async () => {
        const cars = db.collection('cars');

        const mockCar = {
              _id: "carId",
              carMake: "Honda",
              carModel: "Civic",
              carYear: "1980",
              carTag: "123ABC",
              carStatus: "available",
              }

        await cars.insertOne(mockCar)

        const insertedCar = await cars.findOne({ _id: 'carId' });

        expect(insertedCar).toEqual(mockCar)
    },
        
    it('should delete a car from the cars collection', async () => {
        const cars = db.collection('cars')
        await cars.deleteMany({ _id: 'carId' })
        const deletedCar = await cars.findOne({ _id: 'carId' });
        expect(deletedCar).toEqual(null)
    })
)})

