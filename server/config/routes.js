const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const carsController = require('../controllers/carsController');
const subscriptionController = require('../controllers/subscriptionController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/cars', carsController);
    app.use('/subscribe', subscriptionController);
    app.use('/comments', commentController);
}