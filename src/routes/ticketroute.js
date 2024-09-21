// routes/tickets.js
import express from 'express';
import Ticket from '../models/tickets.js';

const router = express.Router();

// Create a new ticket
router.post('/ticket', async (req, res) => {
    const { title, description } = req.body;
    try {
        const ticket = new Ticket({ title, description });
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send('Error creating ticket: ' + error.message);
    }
});

// get tickets
router.get('/ticket', async (req, res) => {
    const tickets = await Ticket.find();
    res.send(tickets);
});

// Get a ticket by ID
router.get('/ticket:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) return res.status(404).send('Ticket not found');
        res.send(ticket);
    } catch (error) {
        res.status(400).send('Error retrieving ticket: ' + error.message);
    }
});

// Update a ticket by ID
router.put('/ticket:id', async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
            title,
            description,
            status,
            lastUpdatedDate: Date.now()
        }, { new: true });

        if (!ticket) return res.status(404).send('Ticket not found');
        res.send(ticket);
    } catch (error) {
        res.status(400).send('Error updating ticket: ' + error.message);
    }
});

// Delete a ticket by ID
router.delete('/ticket:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndRemove(req.params.id);
        if (!ticket) return res.status(404).send('Ticket not found');
        res.send(ticket);
    } catch (error) {
        res.status(400).send('Error deleting ticket: ' + error.message);
    }
});

export default router;
