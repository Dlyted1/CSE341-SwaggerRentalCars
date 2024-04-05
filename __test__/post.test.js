const app = require('../routes')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to post /cars', async () => {
        const res = await request.post('/cars').send(    {
            carMake: "Honda",
            carModel: "Civic",
            carYear: "1980",
            carTag: "123ABC",
            carStatus: "available",
        });
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(400)
    })
})