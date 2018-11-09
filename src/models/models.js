const uuid = require('uuid/v4')
const toys = require("../../data/toys")

function getAll(limit) {
    return limit ? toys.slice(0, limit) : toys
}

// function getToy(id) {
//     return toys.find(obj => obj.id === id)
// }

function deleteToy (toy){
    const ind = toys.findIndex(obj => obj.id === toy.id)
    let toyDeleted = toys.splice(ind, 1)
    return response = toyDeleted
}

function makeToy(body) {
    const errors = []
    const name = body.name
    const material = body.material
    const age = body.age
    const color = body.color

    let response
    if(!name) {
        errors.push('Name is required')
        response = {errors}
    }
    else if(!material || !age || !color){
        errors.push(`New Toy ${name} is missing details`)
        response = {errors}
    }
    else {
        const newToy = {id: uuid(), name: name, material: material, age: age, color: color}
        toys.push(newToy)
        response = newToy
    }

    return response
}

module.exports = { getAll, makeToy, deleteToy }