import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService,
                private router: Router ) { //normalmente utilizamos public para los creados por nosotrosa mismos y que queremos inyectar

  }

  ngOnInit(): void {
  }

  buscarProducto( termino: string){
    if(termino.length<1){
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
