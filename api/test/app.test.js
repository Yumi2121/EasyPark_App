import request from 'supertest'
import app from '../index'
import mongoose from 'mongoose'
import Booking from '../models/Booking'
import User from '../models/User'
import Carpark from '../models/Carpark'


beforeAll(async () => {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true })
})

afterAll(async () => {
    await mongoose.connection.close()
})

// test Carparks
describe("carparks", () => {
    // API test: GET /api/Carparks
    describe('GET /api/carparks', () => {
      it("should respond with 200", async () => {
        await request(app).get(`/api/carparks`).expect(200)
      })
    })