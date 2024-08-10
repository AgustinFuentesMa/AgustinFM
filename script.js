const Productos=[
  {
  id: 1,
  Elemento:"Cafetera",
  Marca: "Moulinex",
  Peso: "15 kg",
  Precio: 45000,
  Tamaño: "Mediano",
  
},

 {
  id:2,
  Elemento:"Samsung Galaxy",
  Modelo: "Samsung S10 Plus",
  Bateria: "4100 mah",
  Pantalla:"Amoled 6,1 Pulgadas",
  Cámara:"Cámara trasera: 12 megapixeles y Cámara delantera: 10 megapixeles",
  Precio: 120000,   
  RAM:"12 GB",   

}
]

console.log(Productos)

function NuevosProductos(id,Elemento,Marca,Precio){
  this.id=id;
  this.Elemento=Elemento;
  this.Marca=Marca;
  this.Precio=Precio;
};


const Producto3= new NuevosProductos(3,"MacBook Pro","MacBook",150000);

const Producto4= new NuevosProductos(4,"Tv 40 pulgadas","LG",100000);

const agregarProductos= (producto) => {
  let Indice= Productos.indexOf(producto)
  if(Indice!= -1){
    console.log("El producto que ingresaste ya existe y está en la posicion"+Indice)
  }
 else{
  Productos.push(producto);
 }
}

function recorrer(){
  for(let index=0;index<Productos.length;index++)
  console.log(Productos[index]);
}

agregarProductos(Producto3);
agregarProductos(Producto4);
recorrer();

