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


import UserRoute from './routes/UserRoute.js'
import bookingRoute from './routes/bookingRoute.js'
import ticketroute from './routes/ticketroute.js' 


app.use("/api", UserRoute)

http://localhost:3000/api/register

app.use("/api", bookingRoute)

app.use("/api", ticketroute)
 
export {app}