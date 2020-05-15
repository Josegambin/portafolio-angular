import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from 'src/app/services/infor-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoServices: InforPaginaService) { }

  ngOnInit(): void {
  }

}
