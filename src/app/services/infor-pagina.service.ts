import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[];
  
  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
  //Leer el archivo Json
  this.http.get('assets/data/data-pagina.json').subscribe((respuesta: InfoPagina) => {
    this.cargada = true;
    this.info = respuesta;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-1438d.firebaseio.com/equipo.json').subscribe((respuesta: any[]) => {
      this.equipo = respuesta;
    });
  }
}
