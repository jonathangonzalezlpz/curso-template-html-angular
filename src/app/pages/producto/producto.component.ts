import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoCompleto } from '../../interfaces/producto-completo.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: ProductoCompleto;
  id:string;
  /*Ahora mismo está como undefined, pero tenemos que tener cuidado al acceder a los atributos
  Podemos poner producto como Obj vacío {} pero para eso hay que añadir ? en la interfaz*/ 
  constructor( private route: ActivatedRoute, public _productoService:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);
      this._productoService.getProducto(parametros['id'])
        .subscribe( (producto:ProductoCompleto) => {
          this.producto=producto;
          this.id= parametros['id'];
        })
    })
  }

}
