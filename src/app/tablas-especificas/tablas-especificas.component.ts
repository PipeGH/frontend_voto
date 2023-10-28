import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GeneralesService } from '../services/generales.service';
import { NumberSymbol } from '@angular/common';
=======
import { SitiosService } from '../services/sitios.service';
import Chart from 'chart.js/auto';
>>>>>>> 8e5cd240d7dbb6b4db26d903531eabb7eb211ec6

@Component({
  selector: 'app-tablas-especificas',
  templateUrl: './tablas-especificas.component.html',
  styleUrls: ['./tablas-especificas.component.css'],
})
export class TablasEspecificasComponent implements OnInit {
  sitios: any[] = [];
<<<<<<< HEAD
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

=======
  public votantes: any;
  public myChart: any;
  createChart() {
    this.votantes = document.getElementById('myChart');
    this.myChart = new Chart("votantes", {
      type: 'line',
      data: {
        labels: ['Agua Bonita', 'Silvania-coliseo', 'Silvania-colegio', 'Subia'],
        datasets: [{
          label: 'Total de Votantes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          pointRadius: 8,
        }]
      },


      options: {
        scales: {
          y: {

            beginAtZero: true
          },
          x: {
            ticks: {
              stepSize: 1,
              font: {
                size: 16
              }
            }
          }
        }
      }
    });
  }
  public votos: any;
  public myChart1: any;
  createChart1() {
    this.votos = document.getElementById('myChart1');
    this.myChart1 = new Chart("votos", {
      type: 'line',
      data: {
        labels: ['Agua Bonita', 'Silvania-coliseo', 'Silvania-colegio', 'Subia'],
        datasets: [{
          label: 'Total de Votos',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          pointRadius: 8
        }]
      },
      options: {
        scales: {
          y: {

            beginAtZero: true
          },
          x: {
            ticks: {
              stepSize: 1,
              font: {
                size: 16
              }
            }
          }
        }
      }
    });
  }

  constructor(private service: SitiosService) { }
>>>>>>> 8e5cd240d7dbb6b4db26d903531eabb7eb211ec6
  ngOnInit(): void {
    this.chargeData();
    this.createChart();
    this.createChart1();
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
<<<<<<< HEAD

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
=======
>>>>>>> 8e5cd240d7dbb6b4db26d903531eabb7eb211ec6
}
