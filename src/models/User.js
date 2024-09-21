import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: /.+\@.+\..+/ 
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User' 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});


const User = mongoose.model('User', userSchema);

export default User;
