const router = require('express').Router();
const userRouter = require('./user.router');
const installRouter = require('./install.router');
const authRouter = require('./auth.router');
const sparePartRouter = require('./spareParts.router');
const reportsRouter = require('./reports.router');

router.use('/install', installRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/spare-parts', sparePartRouter);
router.use('/reports', reportsRouter);
module.exports = router;