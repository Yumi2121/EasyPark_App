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
            password: '123456',
          })
          expect(response.statusCode).toBe(200)
          expect(response.body.email).toBe('yumi_signup@test.com')
        })
      })
      describe("should response with 401", () => {
        it("should response with 200", async () => {
          const response = await request(app).post('/api/users/login').send({
            email: 'yumi_signup@test.com',
            password: '1234'
          })
          expect(response.statusCode).toBe(401)
        })
      })
    })

  })

    // API test: POST api/users/register
    describe("POST api/users/register", () => {
      describe("should response with 201 and right data", () => {
        it("should response with 201", async () => {
          const response = await request(app).post('/api/users/register').send({
            email: 'test777@test.com',
            password: 'password777'
          })
          expect(response.statusCode).toBe(201)
          expect(response.body.email).toBe('test777@test.com')
        })
      })
      describe("should response with 400", () => {
        it("should response with 400", async () => {
          const response = await request(app).post('/api/users/register').send({
            email: 'test1000@test.com',
            password: '123456'
          })
          expect(response.statusCode).toBe(400)
        })
      })
      
    })

    // API test: GET api/users
  describe("GET api/users", () => {
    it("should response with 200", async () => {
      const admin = await request(app).post('/api/users/login').send({
        email: 'test777@test.com',
        password: 'password777'
      })
      const token = await admin.body.token
      const response = await request(app).get('/api/users').set('Authorization', `Bearer ${token}`)
      expect(response.statusCode).toBe(200)
    })
  })

 // test bookings API
describe("booking", () => {
  // API test: POST api/blogs
  describe("POST api/bookings", () => {
    it("should response with 200 and get the new bookings", async () => {
      const user = await request(app).post('/api/users/login').send({
        email: 'test777@test.com',
        password: 'password777'
      })
      const token = await user.body.token
      const response = await request(app).post(`/api/blogs`).set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`).send({
        carpark_name: "New Willson parking",
        start_booking_date: "2020-01-20",
        end_booking_date: "2020-01-21"
      })
      expect(response.statusCode).toBe(201)
      expect(response.body.carpark_name).toBe("New Willson parking")
    })
  })
})
