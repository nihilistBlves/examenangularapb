import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { appRoutingProviders, routing } from './app.routing';
import { GenerosService } from './services/generos.service';
import { NacionalidadesService } from './services/nacionalidades.service';
import { DetallespeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { PeliculasService } from './services/pelisculas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculasComponent,
    DetallespeliculaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, GenerosService, NacionalidadesService, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
