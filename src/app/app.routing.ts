import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";

import { Error404Component } from "./components/error404/error404.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";

const routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "generos/:idGenero", component: PeliculasComponent},
    {path: "nacionalidades/:idNacionalidad", component: PeliculasComponent},
    {path: "buscar/:busqueda", component: PeliculasComponent},
    {path: "**", component: Error404Component}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
