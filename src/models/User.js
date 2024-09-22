import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
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
userSchema.pre("save", async function (next){
  this.password = bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}
    
export const User = mongoose.model("User", userSchema);
