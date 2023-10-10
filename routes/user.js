const express = require('express')

const router = express.Router();

const getUser = require ('../controller/users/userController')

router.get('/', getUser)

module.exports = router;