
import mongoose, {Schema} from "mongoose"
const bookingSchema = new Schema({
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tickets', 
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    bookingDate: {
        type: Date,
        default: Date.now 
    },
    numberOfTickets: {
        type: Number,
        required: true,
        min: 1 
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0 
    },
    status: {
        type: String,
        enum: ['Confirmed', 'Pending', 'Cancelled'],
        default: 'Pending' 
    }
});

export const booking = mongoose.model("booking", bookingSchema);
