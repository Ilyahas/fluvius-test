async function signupUser(req, res, next) {
    const userCredentials = req.body;
    try {
        res.status(200).send(req.body);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    signupUser
};