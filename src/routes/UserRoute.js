// routes/users.js
import {Router} from "express"
import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// CREATE a new user
router.post("/register", async (req, res) => {
    const { username, email, password, role } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User with this email already exists');
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({
        username,
        email,
        password: hashedPassword,
        role
    });

    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send('Error creating user: ' + error.message);
    }
});

// GET all users
router.get('/register', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send('Error retrieving users: ' + error.message);
    }
});

// GET a single user by ID
router.get('/register:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(400).send('Error retrieving user: ' + error.message);
    }
});

// UPDATE a user by ID
router.put('/register:id', async (req, res) => {
    const { username, email, role } = req.body;

    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');

        // Update fields
        user.username = username || user.username;
        user.email = email || user.email;
        user.role = role || user.role;

        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send('Error updating user: ' + error.message);
    }
});

// DELETE a user by ID
router.delete('/register:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send('User deleted successfully');
    } catch (error) {
        res.status(400).send('Error deleting user: ' + error.message);
    }
});

export default router;
