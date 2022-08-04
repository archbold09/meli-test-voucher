
<div align="left">


<!-- About the Project -->
## :star2: Un poco del projecto :)

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Tecnologías usadas</summary>
  <ul>
       <li>Typescript</li>
       <li>Express</li>
       <li>Node.js</li>
       <li>Jest</li>
  </ul>
</details>

<!-- Features -->
### :dart: Características

- Comprar una cantidad de productos con un bono de oferta
- Obtener los productos de la API Mercado libre
- Consutltar de manera aleatoria los productos de la API y verificar que funcione.

<!-- Env Variables -->
### :key: Variables de entorno

Para correr este projecto es necesario tener disponible el puerto `8030`

`API_KEY` = https://api.mercadolibre.com/

<!-- Getting Started -->
## 	:toolbox: Antes de empezar

Un poco de como diseñe esta solucion.

La logica que utilice: `con mi cupo de descuento, realizare una compra en una cantidad de productos X y quiero comprar la mayor cantidad de productos y desperdiciar lo menos posible el valor del cupon.`

`Para mi cupon de "4000" comprare los productos que cuesten menos en mi carrito, y asi conseguire llevarme más productos.`

`No quiero llevarme productos repetidos, asi que, decidi eliminar esos productos que ya tengo 😄`


<!-- Installation -->
### :gear: Requisitos

Este projecto maneja NPM como gestor de paquetes. 
Por favor ejecute los siguientes comandos.

```bash
 npm install 
 npm run build
 npm run start 
```
   
<!-- Running Tests -->
### :test_tube: Iniciar Tests

Para correr los test, ingrese el siguiente comando.

```bash
  npm run test
```

   
<!-- Running Tests -->
### 📦 Datos de prueba

Dejo aqui algunos datos para realizar las pruebas de la API =>  

Respuesta 200 (Cuenta con el descuento suficiente para comprar minimo 1 producto)

`curl --location --request POST 'http://localhost:8030/api/coupon' \--header 'Content-Type: application/json' \--data-raw '{"item_ids": ["MLA1144828035","MLA1130114231","MLA1130114231"],"amount": 500000}'`

`
{
    "item_ids": [
        "MLA1144828035",
        "MLA1130114231",
        "MLA1130114231"
    ],
    "amount": 500000
}
`

Respuesta 404 (No cuenta con el descuento suficiente para la compra minima de 1 producto)

`curl --location --request POST 'http://localhost:8030/api/coupon' \--header 'Content-Type: application/json' \--data-raw '{"item_ids": ["MLA1144828035","MLA1130114231","MLA1130114231"],"amount": 500}'`

`
{
    "item_ids": [
        "MLA1144828035",
        "MLA1130114231",
        "MLA1130114231"
    ],
    "amount": 500
}
`