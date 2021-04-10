require('dotenv').config()

const supertest = require('supertest');

const api = supertest (process.env.BASE_URL)

const getToken = (payload) => api.post('/api/users/login').send(payload)

module.exports = {
    getToken
}