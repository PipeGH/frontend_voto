import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regist-avance',
  templateUrl: './regist-avance.component.html',
  styleUrls: ['./regist-avance.component.css'],
})
export class RegistAvanceComponent implements OnInit {
  sitios: any[] = [];
  mesas: any[] = [];
  temporal: any;
  ciudad_id: number = 0;

  formAvance = this.fb.group({
    ciudad_id: [0, [Validators.required, Validators.min(1)]], //.
    mesa_id: [0, [Validators.required, Validators.min(1)]],
    cime_id: [0, Validators.required],
    votantes: ['', [Validators.required, Validators.min(1)]],
    votos_alcalde: ['', [Validators.required, Validators.min(1)]],
    registradopor: ['', Validators.required],
  });

  get getCiudad_id(): FormControl {
    return this.formAvance.get('ciudad_id') as FormControl;
  }

  get getMesa_id(): FormControl {
    return this.formAvance.get('mesa_id') as FormControl;
  }

  get getCime_id(): FormControl {
    return this.formAvance.get('cime_id') as FormControl;
  }

  get getVotantes(): FormControl {
    return this.formAvance.get('votantes') as FormControl;
  }

  get getVotos_alcalde(): FormControl {
    return this.formAvance.get('votos_alcalde') as FormControl;
  }

  get getRegistradorpor(): FormControl {
    return this.formAvance.get('registradopor') as FormControl;
  }

  constructor(private service: RegistroService, private fb: FormBuilder) {}

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

  guardarCime(event: any): void {
    const cime_id: number = event.target.value;
    this.formAvance.controls.cime_id.setValue(cime_id);
  }

  registrar(): void {
    const data = this.formAvance.value as FormGroup;
    this.service.registro(data).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          text: `${res.message}`,
        }).then(() => {
          this.cancelar();
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          text: 'Actualmente no es posible realiar la petición solicitada, intente más tarde.',
        });
      }
    );
  }

  cancelar() {
    this.formAvance.reset();
    this.formAvance.controls.ciudad_id.setValue(0);
    this.formAvance.controls.mesa_id.setValue(0);
    this.formAvance.controls.cime_id.setValue(0);
  }
}
