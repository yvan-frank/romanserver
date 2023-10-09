const express = require('express')

const router = express.Router();

const getRoman = require ('../controller/roman/getRoman')
const getRomanById = require('../controller/roman/getRomanById')

router.get('/', getRoman)
router.get('/:id', getRomanById)

module.exports = router;