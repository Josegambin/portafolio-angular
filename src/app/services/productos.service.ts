import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  cargando = true;
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-1438d.firebaseio.com/productos_idx.json').subscribe((respuesta: Producto[]) => {
      this.productos = respuesta;
      this.cargando = false;
      resolve();
      });
    });
  }

  getProducto(id: string){
   return this.http.get(`https://angular-html-1438d.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){
    if ( this.productos.length == 0){
      //cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los pruductos.
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      // aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string){
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
