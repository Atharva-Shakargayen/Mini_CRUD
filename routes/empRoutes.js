const express = require('express');
const router = express.Router();
const empControllers = require('../controllers/empControllers');

router.get('/emp', empControllers.getAllEmployees);
router.post('/emp', empControllers.createEmployee);

module.exports = router;
