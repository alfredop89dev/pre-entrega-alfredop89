//1. Declaro la constante que contiene la URL de la API de FakeStore
export const FAKESTORE_API = 'https://fakestoreapi.com/products';

//2. process.argv para obtener los argumentos de la línea de comandos para GET, POST, PUT y DELETE
export const [, , method, resource, title, price, category] = process.argv;

//3. Creo las funciones para obtener los productos de la API
//todos los productos
export async function getProducts(){
    
    try{
        const response = await fetch(FAKESTORE_API).then(res => res.json()).then(data => {
            console.log('Productos obtenidos de la API:', data);
            console.log('Cantidad de productos obtenidos:', data.length);
        });
    }catch(error){
        console.log('Error al obtener los productos de la API:', error);
    } finally{
        console.log('Proceso finalizado.');
    }
}
//producto por id
export async function getProductById(id){
    try{
        const response = await fetch(`${FAKESTORE_API}/${id}`);
        const product = await response.json();
        console.log('Producto obtenido de la API:', product);
    }catch(error){
        id >20 ? console.log('El id ingresado no existe en la API') : console.log('Error al obtener el producto de la API:', error);
    } finally{
        console.log('Proceso finalizado.');
    }
}
//agregar un producto
export async function addProduct(product){
    try{
        const response = await fetch(FAKESTORE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const newProduct = await response.json();
        console.log('Producto agregado a la API:', {newProduct});
    }catch(error){
        console.log('Error al agregar el producto a la API:', error);
    } finally{
        console.log('Proceso finalizado.');
    }
}
//borrar un producto
export async function deleteProduct(id){
    try{
        const response = await fetch(`${FAKESTORE_API}/${id}`, {
            method: 'DELETE'
        });
        const deletedProduct = await response.json();
        console.log('Producto eliminado de la API:', deletedProduct);
    }catch(error){
        console.log('Error al eliminar el producto de la API:', error);
    } finally{
        console.log('Proceso finalizado.');
    }
}



















