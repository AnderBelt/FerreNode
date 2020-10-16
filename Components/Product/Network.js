const { text } = require('body-parser');
const express = require('express'); 

const router = express.Router();

const response = require('../../network/response');

const controller = require('./controller');

router.get('/', function(req,res){
    const filterProducto = req.query.codigo || null;
    
    controller.getProducto(filterProducto)
    .then((ProductList) =>{
        response.success(req, res, ProductList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.post('/', function(req,res){
    
    controller.addProducto(req.body.producto, req.body.codigo, req.body.descripcion, req.body.precio)
        .then((fullProducto)=> {
            response.success(req, res, fullProducto, 201);
        })
        .catch(e =>{
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        })
});

router.patch('/:id', function (req, res){
    console.log(req.params.codigo);

    controller.updateProducto(req.params.codigo, req.body.producto, req.body.descripcion, req.body.precio)
        .then((data) =>{
            response.success(req, res, data, 200);
        })
        .catch(e=> {
            response.error(req, res, 'Error interno', 500, e);
        });

});

router.delete('/:id', function(req, res){
    controller.deleteProducto(req.params.codigo)
        .then(()=>{
            response.success(req, res, `Mensaje del usuario ${req.params.codigo} eliminado`, 200 );
        })
        .catch(e=>{
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router; 