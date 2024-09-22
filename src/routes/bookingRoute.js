import express from 'express';
import { booking as Booking } from '../models/booking.js';

const router = express.Router();

// Create a new booking
router.post('/booking', async (req, res) => {
    const { ticketId, userId, numberOfTickets, totalPrice } = req.body;
    try {
        const booking = new Booking({ // Using the correct model
            ticketId,
            userId,
            numberOfTickets,
            totalPrice
        });
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send('Error creating booking: ' + error.message);
    }
});

// Get all bookings
router.get('/booking', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('ticketId userId');
        res.send(bookings);
    } catch (error) {
        res.status(500).send('Error retrieving bookings: ' + error.message);
    }
});

// Additional routes for updating and deleting bookings...
export default router;
