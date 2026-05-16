const router = require('express').Router();
const userRouter = require('./user.router');
const installRouter = require('./install.router');
const authRouter = require('./auth.router');
router.use('/install', installRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);
module.exports = router;