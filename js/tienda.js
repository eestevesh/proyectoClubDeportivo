let minCount = undefined;
let maxCount = undefined;

//Función para borrar los números ingresados en filtro
function limpiarFiltro() {
  document.getElementById("precioMinimo").value = "";
  document.getElementById("precioMaximo").value = "";
}

//Al hacer click en el button aplicar función y volver a mostrar elementos
document.getElementById("limpiarFiltro").addEventListener("click", function () {
  limpiarFiltro();
  mostrarProductos(arregloProductos);
});

//Definir función para mostrar los 16 productos de la tienda
function mostrarProductos(arregloDeProductos) {

  //Loop para iterar en el arreglo ingreado como parámetro
  let htmlParaAgregar = "";
  for (let i = 0; i < arregloDeProductos.length; i++) {
    let productos = arregloDeProductos[i];

    //Por cada elemento del array, agregar HTML

      htmlParaAgregar += `
    
                <div class="div-producto">
                <a href="">
                    <div class="div-imagen-producto">
                        <img class="imagen-producto"
                            src="${productos.Imagen}" />
                    </div>
                    <div class="imagen-texto">
                        <h4 class="imagen-titulo">${productos.Nombre}</h4>
                        <p class="imagen-descripcion">${productos.Descripcion}</p>
                        <div class="contenido-menor">
                            <small class="camisetas">$ ${productos.Precio}</small>
                        </div>
                    </div>
                </a>
            </div>
                `;
    //}

    document.getElementById("contenedor-productos").innerHTML = htmlParaAgregar;
  }
}
//Aplicar función con la array definida en script.js
mostrarProductos(arregloProductos);

//Definir función para mostrar solo los elementos con Precio entre los valores ingresados
function filtrarProductos(array, valorMinimo, valorMaximo){
    let htmlParaAgregar = "";

    for (let i = 0; i < array.length; i++) {
      let producto = array[i];
  
      if (parseInt(producto.Precio) >= valorMinimo &&
        parseInt(producto.Precio) <= valorMaximo) {

        htmlParaAgregar += `
  
                <div class="div-producto">
                  <a href="">
                      <div class="div-imagen-producto">
                          <img class="imagen-producto"
                              src="${producto.Imagen}" />
                      </div>
                      <div class="imagen-texto">
                          <h4 class="imagen-titulo">${producto.Nombre}</h4>
                          <p class="imagen-descripcion">${producto.Descripcion}</p>
                          <div class="contenido-menor">
                              <small class="camisetas">$ ${producto.Precio}</small>
                          </div>
                      </div>
                  </a>
                </div>
                  `;
      }
  
      document.getElementById("contenedor-productos").innerHTML = htmlParaAgregar;
    }

}

//Aplicar función al hacer click en button
document
  .getElementById("filtrarPorPrecio")
  .addEventListener("click", function () {

    //Obtengo el mínimo y máximo para filtrar

     minCount = document.getElementById("precioMinimo").value;
     maxCount = document.getElementById("precioMaximo").value;


     //Solo aplicarla cuando los valores son válidos; función parseInt() para pasar de String a Integer

    if (minCount != undefined && minCount != "" && parseInt(minCount) >= 0) {
      minCount = parseInt(minCount);
    } 

    if (maxCount != undefined && maxCount != "" && parseInt(maxCount) >= 0) {
      maxCount = parseInt(maxCount);
    } 

    filtrarProductos(arregloProductos, minCount, maxCount);
});



/* const precioCamisetas = "$ " + 2000; // 5
const precioAbrigo = "$ " + 3000; // 2
const precioRopaChica = "$ " + 500; // 2
const precioPelotas = "$ " + 1000; // 2
const precioArticulosVarios = "$ " + 500; // 5

const camisetas = document.getElementsByClassName("camisetas");
const abrigo = document.getElementsByClassName("abrigo");
const ropaChica = document.getElementsByClassName("ropaChica");
const pelotas = document.getElementsByClassName("pelotas");
const articulosVarios = document.getElementsByClassName("articulosVarios"); 

function sustituirPrecios(array) {
  let precio;
  if (array === camisetas) {
    precio = precioCamisetas;
  } else if (array === abrigo) {
    precio = precioAbrigo;
  } else if (array === ropaChica) {
    precio = precioRopaChica;
  } else if (array === pelotas) {
    precio = precioPelotas;
  } else if (array === articulosVarios) {
    precio = precioArticulosVarios;
  }

  for (let i = 0; i < array.length; i++) {
    array[i].innerHTML = precio;
  }
}

sustituirPrecios(camisetas);
sustituirPrecios(abrigo);
sustituirPrecios(ropaChica);
sustituirPrecios(pelotas);
sustituirPrecios(articulosVarios); 
*/
