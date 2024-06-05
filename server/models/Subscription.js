const {Schema, model} = require('mongoose');

const subscriptionSchema = new Schema({
    email: {
        type: String, 
        required: true,
        match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!']
    }
});

const subscriptionModel = model('Subscription', subscriptionSchema);

module.exports = {
    subscriptionModel
};