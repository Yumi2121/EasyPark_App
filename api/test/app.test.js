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

// test Users
describe("users", () => {
    // API test: POST /api/users/login
    describe('GET /api/users/login', () => {
      describe("should respond with 200 and correct user name", () => {
        it("should response with 200", async () => {
          const response = await request(app).post('api/users/login').send({
            email: 'yumi_signup@test.com',
            password: '123456'
          })
          expect(response.statusCode).toBe(200)
          expect(response.body.email).toBe('yumi_signup@test.com')
        })
      })
    })

    // describe('POST /api/')

  })