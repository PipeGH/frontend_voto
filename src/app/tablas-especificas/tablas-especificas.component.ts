import { Component, OnInit } from '@angular/core';
import { SitiosService } from '../services/sitios.service';

@Component({
  selector: 'app-tablas-especificas',
  templateUrl: './tablas-especificas.component.html',
  styleUrls: ['./tablas-especificas.component.css']
})
export class TablasEspecificasComponent implements OnInit {
  sitios: any[] = [];

  constructor(private service: SitiosService) { }

  ngOnInit(): void {
    this.chargeData();
  }
  chargeData() {
    this.service.getLugares().subscribe((res: any) => {
      for (let sitio of res.list) {
        this.sitios = [...this.sitios, sitio];
      }
    });
  }

}
