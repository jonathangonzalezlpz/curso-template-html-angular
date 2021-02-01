import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root' //En que nivel lo inyecta
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[]=[];

  constructor(private http: HttpClient) { //servicio incluido en el modulo importado en appmodule HttpClientModule
    //Este modulo nos permite conectarnos por ejemplo a servidores REST
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina)=> {
      this.cargada=true;
      this.info=resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-c8ab4-default-rtdb.firebaseio.com/equipo.json').subscribe((resp: any[])=> {
      this.equipo=resp;
    });
  }
}
