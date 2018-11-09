const model = require('../models/models')
const toys = require('../../data/toys')

function chkToy(req, res, next) {
   const validToy = toys.find(obj => obj.id === req.params.id)
   if(!validToy)
    return next({status: 404, message: "Could not find that Toy"})
    
    req.toy = validToy
    next()
}

function getAll (req,res,next) {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).send({data})
}

function getToy (req,res,next) {
    res.status(200).send(req.toy)
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

function deleteToy(req,res,next) {
    const data = model.deleteToy(req.toy)
    res.status(200).send(data)
}



module.exports = {getAll, makeToy, chkToy, getToy, deleteToy}