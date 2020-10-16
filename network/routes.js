const express = require('express');
const Product = require('../Components/Product/Network');

const routes = function (server){
    server.use('/Productos', Product)
}

module.exports = routes;