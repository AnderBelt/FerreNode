
const Model = require('./model');

function addP(producto){
    //list.push(message);
    const myProduct = new Model(producto);
    myProduct.save();
}

async function getP(filterUser){
    let filter = {};
    if (filterUser !== null){
        filter = {user: filterUser};
    }
    const Products = await Model.find(filter);
    return Products;
}

async function updateP(codigo, producto){
    const foundproduct = await Model.findOne({
        _codigo: codigo,
    });

    foundproduct.producto = producto;
    const newProducto = await foundproduct.save();
    return newProducto;
}

function removeP(codigo){
    return Model.deleteOne({
        _codigo: codigo,
    })
}

module.exports = {
    add: addP,
    list: getP,
    updateText: updateP,
    remove: removeP,
}