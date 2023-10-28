import { Component, OnInit } from '@angular/core';
import { SitiosService } from '../services/sitios.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tablas-especificas',
  templateUrl: './tablas-especificas.component.html',
  styleUrls: ['./tablas-especificas.component.css']
})
export class TablasEspecificasComponent implements OnInit {
  sitios: any[] = [];
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
  ngOnInit(): void {
    this.chargeData();
    this.createChart();
    this.createChart1();
  }
  chargeData() {
    this.service.getLugares().subscribe((res: any) => {
      for (let sitio of res.list) {
        this.sitios = [...this.sitios, sitio];
      }
    });
  }
}
