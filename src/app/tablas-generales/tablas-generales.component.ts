import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../services/generales.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tablas-generales',
  templateUrl: './tablas-generales.component.html',
  styleUrls: ['./tablas-generales.component.css'],
})
export class TablasGeneralesComponent implements OnInit {
  sitios: any[] = [];
  mesas: any[] = [];
  lista: any = [];
  ciudad_id: number = 0;

  p: number = 1;
  filtro: string = '';
  registros: number = 5;

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData(): void {
    this.service.getLugares().subscribe((res: any) => {
      for (let x of res.list) {
        this.sitios = [...this.sitios, x];
      }
    });
  }

  onSelect(event: any): void {
    this.ciudad_id = event.target.value;
    this.mesas = [];
    if (event.target.value != 0) {
      let id: number = this.ciudad_id;
      this.service.getMesas(id).subscribe((res: any) => {
        for (let x of res.list) {
          this.mesas = [...this.mesas, x];
        }
      });
    } else {
      this.ciudad_id = 0;
      this.mesas = [];
    }
  }

  onSelectlist(event: any): void {
    let cime_id: number = event.target.value;
    console.log(cime_id);

    if (cime_id != 0) {
      this.service.getList(cime_id).subscribe((res: any) => {
        for (let x of res.list) {
          this.lista = [...this.lista, x];
        }
      });
    } else {
      this.lista = [];
    }
  }

  handlePageChange(event: any) {
    this.p = event;
  }
}