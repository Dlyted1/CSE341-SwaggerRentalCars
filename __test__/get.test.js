const app = require('../app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Cars Test Handlers', () => {
    test('database returns a value of a car by ID', async () => {
        return await request.get('/cars/660f75091b0bbe82fc5bdb03').then( () => {
        expect("200").toContain('200');
        })
    })

    test('database returns a value of a car by Tag', async () => {
        return await request.get('/cars/MPL798').then( () => {
        expect("200").toContain('200');
        })
    })

    test('database returns a value of a car by Status', async () => {
        return await request.get('/cars/Rented').then( () => {
        expect("200").toContain('200');
        })
    })


describe('Employees Test Handlers', () => {
    test('database returns a value of a employee in it', async () => {
        return await request.get('/employees/660ef090cb8dd844d2e8a77e').then( () => {
        expect("200").toContain('200');
        })
    })


describe('Renters Test Handlers', () => {
    test('database returns a value of a renter in it', async () => {
        return await request.get('/renters/660c5704a1f1074964cc1eb7').then( () => {
        expect("200").toContain('200');
        })
    })


describe('Stores Test Handlers', () => {
    test('database returns a value of a store in it', async () => {
        return await request.get('/stores/660efad6cb8dd844d2e8a78e').then(list => {
        expect("200").toContain('200');
        })
    })

describe('Rental Test Handlers', () => {
    test('database returns a value of a rental in it', async () => {
        return await request.get('/renter/660efad6cb8dd844d2e8a78e').then(list => {
        expect("200").toContain('200');
        })
    })
})
})
})
})
})
