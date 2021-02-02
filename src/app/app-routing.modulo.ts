import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent}, //cambiamos ''vacío por home para evitar pequeños bugss relacionados con routerlinkActive
    { path: 'about', component: AboutComponent},
    { path: 'producto/:id', component: ProductoComponent }, //Especifico que tengo que enviar el id
    { path: 'search/:termino', component: SearchComponent }, //Especifico que tengo que enviar el id

    { path: '**', pathMatch: 'full', redirectTo: 'home'} //Cualquier cosa distinta de las routas indicadas redirige a portafolio 
];

@NgModule({
    imports: [ //Como RouterModule es un módulo utilizamos imports
        RouterModule.forRoot( app_routes, { useHash: true}) //useHash:true, incluye un # en la ruta para indicar que lo que viene después no 
        //es un directorio, sino una parte de la ruta del index.html que se encuentra en esa dirección
    ],
    exports: [ //Hay que exportar para que pueda ser utilizado fuera, en este caso en el app-component
        RouterModule
    ]
}) 

export class AppRoutingModule{

}





