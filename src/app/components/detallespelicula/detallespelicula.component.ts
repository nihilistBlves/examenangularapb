import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { GenerosService } from 'src/app/services/generos.service';
import { PeliculasService } from 'src/app/services/pelisculas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detallespelicula',
  templateUrl: './detallespelicula.component.html',
  styleUrls: ['./detallespelicula.component.css']
})
export class DetallespeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() ocultar = new EventEmitter<any>();
  @Output() recargarPeliculas = new EventEmitter<any>();
  public peliculaGenero!: Genero;
  public generos!: Array<Genero>
  @ViewChild('selectgeneros') selectgeneros!: ElementRef;
  public mostrarVideo!: boolean; 

  constructor(
    private _servicePeliculas: PeliculasService,
    private _serviceGeneros: GenerosService,
    private _router: Router,
    private _sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    //ASI ACTUALIZAMOS LOS DATOS DE LA PELICULA ANTES DE MOSTRARLA PARA EVITAR DESFASE DE DATOS
    this._servicePeliculas.getPeliculaById(this.pelicula.idPelicula).subscribe(response => {
      this.pelicula = response;
    });
    this.cargarGeneros();
  }

  getVideoFrame(url: string) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

  cargarGeneros(): void {
    this._serviceGeneros.getGeneros().subscribe(response => {
      this.generos = response;
      this.generos.map((genero, index) => {
        if (genero.idGenero == this.pelicula.idGenero) {
          this.peliculaGenero = genero;
        }
      });
    });
  }

  modificarGenero() {
    var idGenero = this.selectgeneros.nativeElement.value;
    this.pelicula.idGenero = idGenero;
    this._servicePeliculas.putPeliculaGenero(this.pelicula).subscribe(response => {
      this._router.navigate(['generos', idGenero]);
      this.mostrarVideo = false;
      this.ocultarHijo();
    });
  }

  eliminarPelicula(): void {
    this._servicePeliculas.deletePelicula(this.pelicula).subscribe(response => {
      this.recargarPeliculas.emit("");
      this.mostrarVideo = false;
      this.ocultarHijo();
    });
  }

  mostrarFrameVideo(): void {
    this.mostrarVideo = true;
  }

  //METODO HEREDADO DE PADRE
  ocultarHijo():void {
    this.ocultar.emit(false);
  }

}
