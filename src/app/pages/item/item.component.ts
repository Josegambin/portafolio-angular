import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductosDescripcion } from '../../interfaces/producto-descripcion.interfece';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductosDescripcion;
  id: string;
  constructor(private route: ActivatedRoute, public productoServices: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      // console.log(parametros['id']);

      this.productoServices.getProducto(parametros['id']).subscribe((producto: ProductosDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
      });
    });
  }
}
