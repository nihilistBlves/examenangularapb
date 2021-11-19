import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/genero';
import { Nacionalidad } from 'src/app/models/nacionalidad';
import { GenerosService } from 'src/app/services/generos.service';
import { NacionalidadesService } from 'src/app/services/nacionalidades.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public generos!: Array<Genero>;
  public nacionalidades!: Array<Nacionalidad>;
  @ViewChild('cajabusqueda') cajabusqueda!: ElementRef;

  constructor(
    private _serviceGeneros: GenerosService,
    private _serviceNacionalidades: NacionalidadesService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this._serviceGeneros.getGeneros().subscribe(response => {
      this.generos = response;
    });
    this._serviceNacionalidades.getNacionalidades().subscribe(response =>{
      this.nacionalidades = response;
    });
  }

  buscarPeliculas() {
    var busqueda = this.cajabusqueda.nativeElement.value;
    if (busqueda != "") {
      this._router.navigate(['/buscar', busqueda]);
    }
  }

}
