import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    //Se llama al inicializar el constructor por primera vez, 
    //Queremos que devuelva algo asíncrono, una promesa que ejecute el código
    //e indique cuando ha acabado, es decir cuando tiene los productos cargados.
    return new Promise( (resolve,reject) => {
      this.http.get('https://angular-html-c8ab4-default-rtdb.firebaseio.com/productos_idx.json').subscribe((resp: ProductoInterface[])=>{
        this.productos=resp;
        this.cargando=false;
        resolve(1);
      });
    });
  }

  public getProducto(id:string){
    return this.http.get(`https://angular-html-c8ab4-default-rtdb.firebaseio.com/productos/${id}.json`); //``nos permite incrustar variables en las cadenas mediante ${}
  }

  public buscarProducto(termino:string){ //Hay que asegurar que la busqueda no empiece hasta que termine la carga asíncrona
    if(this.productos.length==0){ //Si aun no hay productos
      //Cargar Productos
      this.cargarProductos().then(()=>{ //esperamos a que ase cargen y cuando lo hagan filtramos
        //Se va a ejecutar despues de tener los productos, aplicamos filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }
    
  }

  private filtrarProductos(termino:string){
    this.productosFiltrado=[];
    termino=termino.toLowerCase(); //Js es keySensitive, diferencia entre mayus y minus, pasando los dos a minusculas evitamos errores.
    this.productos.forEach(prod => { //para cada producto de productos
      const tituloLower = prod.titulo.toLowerCase();//minus, la categoria ya viene en minus
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){ //compruebo si la categoria o título coincide parcialmente o en su totalidad
        this.productosFiltrado.push(prod); //si coincide algo lo añado al nuevo array
      }
    })
  }
}
