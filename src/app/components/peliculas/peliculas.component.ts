import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/pelisculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas!: Array<Pelicula>;
  public idNacionalidad!: number;
  public idGenero!: number;
  public busqueda!: string;
  public peliculaSeleccionada!: Pelicula;
  public mostrar!: boolean;

  constructor(
    private _servicePeliculas: PeliculasService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarDatos("");
  }

  cargarDatos(event: any): void {
    this._route.url.subscribe(response => {
      if (response[0].path == "generos") {
        this.cargarIdGenero();
        this.cargarPeliculasPorGenero();
      } else if (response[0].path == "nacionalidades") {
        this.cargarIdNacionalidad();
        this.cargarPeliculasPorNacionalidad();
      } else if (response[0].path == "buscar") {
        this.cargarBusqueda();
        this.cargarPeliculasPorBusqueda();
      }
    });
  }

  ocultarHijo(estado: boolean): void {
    this.mostrar = estado;
    console.log(this.mostrar);
  }

  seleccionarPelicula(pelicula: Pelicula): void {
    this.peliculaSeleccionada = pelicula;
    this.mostrar = true;
  }

  cargarPeliculasPorGenero(): void {
    this._servicePeliculas.getPeliculasByGenero(this.idGenero).subscribe(response => {
      this.peliculas = response;
    });
  }

  cargarPeliculasPorNacionalidad(): void {
    this._servicePeliculas.getPeliculasByNacionalidad(this.idNacionalidad).subscribe(response => {
      this.peliculas = response;
    });
  }

  cargarPeliculasPorBusqueda() {
    this._servicePeliculas.getPeliculasByQuery(this.busqueda).subscribe(response => {
      this.peliculas = response;
    });
  }

  cargarIdGenero(): void {
    this._route.params.subscribe((params: Params) => {
      this.idGenero = params['idGenero'];
    });
  }

  cargarIdNacionalidad(): void {
    this._route.params.subscribe((params: Params) => {
      this.idNacionalidad = params['idNacionalidad'];
    });
  }

  cargarBusqueda(): void {
    this._route.params.subscribe((params: Params) => {
      this.busqueda = params['busqueda'];
    });
  }  
}
