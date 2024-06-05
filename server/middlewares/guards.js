function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Sign in' });
        }
    }
}
function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            next();
        } else {
            res.status(403).json({ message: 'No access' });
        }
    }
}
module.exports = {
    isGuest,
    isUser
}