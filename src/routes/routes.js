const express = require('express')
const router = express.Router()
const ctrl = require('../controller/controller')

router.get('/', ctrl.getAll)
// router.get('/:id', ctrl.getToy)
router.post('/', ctrl.makeToy)
// router.delete('/:id', ctrl.deleteToy)
// router.put('/:id', ctrl.updateToy)


module.exports = router