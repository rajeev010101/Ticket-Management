import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    orirgin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(cookieParser())

import UserRoute from "./routes/UserRoute"
import ticketRoutes from './routes/tickets.js';
import bookingRoutes from './routes/bookings.js';  

export {app}