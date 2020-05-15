import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {
  info: InfoPagina = {};
  cargada = false;
  constructor( private http: HttpClient) {
    //Leer el archivo Json

    this.http.get('assets/data/data-pagina.json').subscribe((respuesta: InfoPagina) => {
      console.log(respuesta);

      this.cargada = true;
      this.info = respuesta;
      console.log(respuesta['twitter']);
      console.log(respuesta['email']);

    });


  }
}
