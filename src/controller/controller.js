const model = require('../models/models')

function getAll (req,res,next) {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).send({data})
}

function makeToy (req,res,next) {
    const result = model.makeToy(req.body)

    if(result.errors) {
        return next({status: 400, message:
             'Could not create new toy',
              errors: result.errors})
    }

    res.status(201).send({data: result})
}

module.exports = {getAll, makeToy}