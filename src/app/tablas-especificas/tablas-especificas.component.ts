import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../services/generales.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-tablas-especificas',
  templateUrl: './tablas-especificas.component.html',
  styleUrls: ['./tablas-especificas.component.css'],
})
export class TablasEspecificasComponent implements OnInit {
  sitios: any[] = [];
  mesas: any[] = [];
  lista: any = [];
  ciudad_id: number = 0;
  total: any[] = [];
  sumatoria_votantes: number = 0;
  sumatoria_votos_por_alcalde: number = 0;

  coliseo: any[] = [];
  colegio: any[] = [];
  subia: any[] = [];
  agua: any[] = [];

  p: number = 1;
  filtro: string = '';
  registros: number = 5;

  constructor(private service: GeneralesService) {}

  ngOnInit(): void {
    this.chargeData();
  }

  chargeData(): void {
    this.service.getLugares().subscribe((res: any) => {
      for (let x of res.list) {
        this.sitios = [...this.sitios, x];
      }
    });
    this.service.getTotalLugar().subscribe((res: any) => {
      for (let x of res.list) {
        this.total = [...this.total, x];
      }
    });
    this.service.getTotal().subscribe((res: any) => {
      this.sumatoria_votantes = res.list[0]?.sumatoria_votantes;
      this.sumatoria_votos_por_alcalde =
        res.list[0]?.sumatoria_votos_por_alcalde;
    });
    this.service.getGrafica().subscribe((res: any) => {
      for (let x of res.list) {
        if (x.municipio == 'Agua Bonita') {
          this.agua = [
            ...this.agua,
            {
              municipio: x.municipio,
              sumatoria_votantes: x.sumatoria_votantes,
              sumatoria_votos_por_alcalde: x.sumatoria_votos_por_alcalde,
              hora: x.hora,
            },
          ];
        } else if (x.municipio == 'Silvania - Colegio') {
          this.colegio = [
            ...this.colegio,
            {
              municipio: x.municipio,
              sumatoria_votantes: x.sumatoria_votantes,
              sumatoria_votos_por_alcalde: x.sumatoria_votos_por_alcalde,
              hora: x.hora,
            },
          ];
        } else if (x.municipio == 'Silvania - Coliseo') {
          this.coliseo = [
            ...this.coliseo,
            {
              municipio: x.municipio,
              sumatoria_votantes: x.sumatoria_votantes,
              sumatoria_votos_por_alcalde: x.sumatoria_votos_por_alcalde,
              hora: x.hora,
            },
          ];
        } else if (x.municipio == 'Subia') {
          this.subia = [
            ...this.subia,
            {
              municipio: x.municipio,
              sumatoria_votantes: x.sumatoria_votantes,
              sumatoria_votos_por_alcalde: x.sumatoria_votos_por_alcalde,
              hora: x.hora,
            },
          ];
        }
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
