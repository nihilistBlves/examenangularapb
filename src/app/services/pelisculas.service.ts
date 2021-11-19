import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculasService {

    constructor(
        private _http: HttpClient,
    ) {}

    getPeliculasByNacionalidad(idNacionalidad: number): Observable<any> {
        var request = "api/peliculas/peliculasnacionalidad/" + idNacionalidad;
        var url = Global.url + request;
        return this._http.get(url);
    }

    getPeliculasByGenero(idGenero: number): Observable<any> {
        var request = "api/peliculas/peliculasgenero/" + idGenero;
        var url = Global.url + request;
        return this._http.get(url);
    }

    getPeliculaById(idPelicula: number): Observable<any> {
        var request = "api/peliculas/" + idPelicula;
        var url = Global.url + request;
        return this._http.get(url);
    }

    putPeliculaGenero(peliculaModificada: Pelicula): Observable<any> {
        var request = "api/peliculas/updatepeliculagenero/" + peliculaModificada.idPelicula + "/" + peliculaModificada.idGenero;
        var url = Global.url + request;
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, {headers: header});
    }

    deletePelicula(pelicula: Pelicula): Observable<any> {
        var request = "api/peliculas/" + pelicula.idPelicula;
        var url = Global.url + request;
        return this._http.delete(url);
    }

    getPeliculasByQuery(busqueda: string): Observable<any> {
        var request = "api/peliculas/buscadorpeliculas/" + busqueda;
        var url = Global.url + request;
        return this._http.get(url);
    }

}