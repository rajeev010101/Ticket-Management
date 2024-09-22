import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    status: {
        type: String,
        default: 'open'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastUpdatedDate: {
        type: Date,
        default: Date.now
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket; // Default export
