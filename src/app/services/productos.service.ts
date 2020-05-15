import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto;
  cargando = true;
s
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-html-1438d.firebaseio.com/productos_idx.json').subscribe((respuesta: Producto) => {
      this.productos = respuesta;
      console.log(respuesta);
      this.cargando = false;
    });
  }
}
