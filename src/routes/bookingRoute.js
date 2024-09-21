// routes/bookings.js
import express from 'express';
import Booking from '../models/booking.js';

const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
    const { ticketId, userId, numberOfTickets, totalPrice } = req.body;
    try {
        const booking = new Booking({
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
router.get('/', async (req, res) => {
    const bookings = await Booking.find().populate('ticketId userId');
    res.send(bookings);
});

// Additional routes for updating and deleting bookings...
export default router;
