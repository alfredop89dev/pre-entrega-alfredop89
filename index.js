
//PRE-ENTREGA - BACKEND + NODE.JS - ALFREDO A. PEREZ M.
//Importacion de modulos
import { method, resource, title, price, category, getProducts, getProductById, addProduct, deleteProduct } from './functions.js';

//correr el proyecto
function run() {
    console.log('Instrucción ingresada:', method, resource, title, price, category);
    //todos los productos, por id, agregar y borrar
    if (method === 'GET') {
        if (resource === 'products') {
            getProducts();
        } else if (resource.includes('/')) {
            getProductById(resource.split('/')[1]);
        } else {
            console.log('Instrucción no válida para GET');
        }
    } else if (method === 'POST') {
        if (typeof price !== 'number') {
            console.log('El precio debe ser un número');
            return;
        }
        if (resource === 'products') {
            addProduct();
            console.log('Producto agregado a la API:', { title, price, category });
        } else {
            console.log('Instrucción no válida para POST');
        }
    } else if (method === 'DELETE') {
        if (resource.includes('/')) {
            deleteProduct(resource.split('/')[1]);
        } else {
            console.log('Instrucción no válida para DELETE');
        }
    } else {
        console.log('Método no soportado');
    }
}
run();