const  mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        require:[true, 'user name is Required'],
        minLength: [10, 'Name must be at least 5 char'],
        MaxLength: [20, 'Name must be less than 20 char'],
        trim: true
    },
    email:{
        type: String,
        require: [true, 'user email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'already registered']
    },
    password:{
        type: String,
    },
    forgotPasswordToken: {
        type: String
    },
    forPasswordExpiryDate:{
        type: String
    }
},{timestamps: true

});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;