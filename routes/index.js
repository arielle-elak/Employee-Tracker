const router = require('express').Router();

const userRoutes = require('./employeeRoutes');

router.use('/users', userRoutes);

module.exports = router;
