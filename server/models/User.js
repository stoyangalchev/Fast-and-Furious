const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: {type: String, required: true},
    hashedPassword: { type: String, required: true },
    likedcars: [{type: Schema.Types.ObjectId, ref: 'car', default: []}]
});

const User = model('User', userSchema);

module.exports = User;