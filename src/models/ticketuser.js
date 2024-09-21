import mongoose, {Schema} from "mongoose";

const titcketuserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    fullname: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
})



export const titcketuser = mongoose.model("Ticketuser", titcketuserSchema)