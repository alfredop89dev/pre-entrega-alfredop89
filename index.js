
//PRE-ENTREGA - BACKEND + NODE.JS - ALFREDO A. PEREZ M.
//Importacion de funciones y variables desde functions.js
import { method, resource, title, price, category, getProducts, getProductById, addProduct, deleteProduct } from './functions.js';

//funcion para correr el proyecto
function callApi() {

    //ternarios para validar los argumentos ingresados
    method !== 'GET' && method !== 'POST' && method !== 'DELETE' ? console.log('Método no soportado') : null;

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
    }
}
callApi();