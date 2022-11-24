import express from "express"
import cors from 'cors'
import resturants from './api/restaurants.route.js'

const app = express()

// to handle any errors in server connections
app.use(cors())
// to accept any json in the POST/GET req
app.use(express.json())

app.use('/api/v1/restaurants', resturants)
// if received the unavailable urls response with not found
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }))

export default app