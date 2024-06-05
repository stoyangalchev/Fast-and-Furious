const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    carId: {
        type: String,
        required: true
    },   
    comment: {
        type: String,
        required: true,
        minLength: [5, 'Comment must be at least 5 characters']
    },  
    author: {type: String, 
        required: true,
    minLength: [2, 'Your nickname must be at least 2 characters long']},
});

const commentModel = model('Comment', commentSchema);
module.exports = {
    commentModel
};