const auth = require('../middlewares/auth')

module.exports = async (app) => {
    app.use(auth());
}