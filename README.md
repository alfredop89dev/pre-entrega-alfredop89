# Pre-Entrega: Backend + Node.js - Alfredo A. Perez M.

Herramienta funcional de línea de comandos (CLI) desarrollada en Node.js para la gestión y consulta de productos de una tienda en línea, consumiendo la API externa de **FakeStore**.

## Autor
* **Alfredo A. Perez M.**

---

## Características Principales
* **Entorno Moderno:** Configurado con **ESModules** (`"type": "module"`) en Node.js.
* **Procesamiento Dinámico:** Captura y análisis de argumentos mediante `process.argv`.
* **Consumo de APIs Asíncronas:** Implementación de `fetch` con manejo de promesas y bloques `async/await` para operaciones HTTP (`GET`, `POST`, `DELETE`).

---

## Requerimientos e Instrucciones de Uso

### 1. Configuración Inicial
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu equipo. Clona o descarga este repositorio y asegúrate de tener la estructura de archivos (`index.js` y `functions.js`) en el directorio principal.

### 2. Ejecución del Programa
El proyecto cuenta con un script configurado en el `package.json` para facilitar su ejecución desde la terminal:

```bash
npm run start
```

---

## Comandos Disponibles

### 📋 Consultar Todos los Productos (`GET`)
Realiza una petición para obtener el listado completo de productos de la tienda.
```bash
npm run start GET products
```

### 🔍 Consultar un Producto Específico (`GET` por ID)
Obtiene la información detallada de un producto indicando su ID único.
```bash
npm run start GET products/15
```

### ➕ Crear un Producto Nuevo (`POST`)
Envía los datos de un nuevo producto (`title`, `price`, `category`) a la API.
```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

### 🗑️ Eliminar un Producto (`DELETE`)
Simula la eliminación de un producto de la tienda especificando su ID.
```bash
npm run start DELETE products/7
```

---

## Tecnologías Utilizadas
* **Node.js** (Entorno de ejecución)
* **JavaScript (ES6+)**
* **FakeStore API** (API REST de prueba)