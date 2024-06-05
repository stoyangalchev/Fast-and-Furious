const router = require('express').Router();

router.post('/login', async (req, res) => {
    try {
        const user = await req.auth.login(req.body.username, req.body.password);
        res.json(user);
    } catch (error) {
        const message = error.type == 'credential' ? 'Incorrect username or password' : error.message;
        res.status(error.status || 400).json(message);
    }
});

router.post('/register', async (req, res) => {
    try {
    const user = await req.auth.register(req.body.firstname, req.body.lastname, req.body.username,req.body.email, req.body.password);
    res.json(user);
} catch (error) {
        res.status(error.status || 400).json(error.message);
}
})
router.get('/logout', (req, res) => {
    res.json({});
});
module.exports = router;