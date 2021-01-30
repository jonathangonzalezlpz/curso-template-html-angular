import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; //necesario para el info-pagina.service
//Rutas
import { AppRoutingModule } from './app-routing.modulo';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [ //La parte de los módulos por lo general va aquí
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], //Anteriormente los servicios se colocan aqui, pero actualmente el injectable del propio servicio lo soluciona
  bootstrap: [AppComponent]
})
export class AppModule { }
