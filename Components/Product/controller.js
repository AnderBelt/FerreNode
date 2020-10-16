const store = require('./store');

function addProducto(producto, codigo, descripcion, precio){
    return new Promise ((resolve, reject) => {
        if (!producto || !codigo  || !descripcion || !precio){
            console.error('[messageController] : Falta algun dato');
            reject('Los datos son incorrectos');
            return false;
        }
        console.log(producto);
        console.log(codigo);
        console.log(descripcion);
        console.log(precio);
        const fullproducto={
            producto: producto,
            codigo: codigo,
            descripcion: descripcion,
            precio: precio,
            date: new Date(),
        };
        store.add(fullproducto);
        resolve(fullproducto);
    });
}

 
function getProducto(filterUser){
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterUser));
    })
}

function updateProducto(codigo, producto, descripcion, precio){
    return new Promise(async(resolve, reject)=>{
        if(!codigo || !message || !descripcion || !precio){
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(codigo, producto, descripcion, precio);

        resolve(result);
    });
}

function deleteProducto(codigo){
    return new Promise((resolve, reject) => {
        if (!codigo){
            reject('Id invalido');
            return false;
        }
        store.remove(codigo)
            .then(()=>{
                resolve();
            })
            .catch(e =>{
                reject(e);
            })
    });
}

module.exports = {
    addProducto,
    getProducto,
    updateProducto,
    deleteProducto,
}