import express from "express"

const router = express.Router()

router.route('/').get((req, res) => res.send('hi this is home page'))

export default router