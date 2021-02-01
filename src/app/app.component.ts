import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _infoPaginaService: InfoPaginaService, public _infoProductosService: ProductosService){ //Con solo indicar ahi el servicio angular va a llamar a su constructor

  }
}
