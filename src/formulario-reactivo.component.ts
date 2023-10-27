import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  get getNombre(): FormControl {
    return this.formUser.get('nombre') as FormControl;
  }

  get getEmail(): FormControl {
    return this.formUser.get('email') as FormControl;
  }

  get getEdad(): FormControl {
    return this.formUser.get('edad') as FormControl;
  }

  get getPassword(): FormControl {
    return this.formUser.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  formUser = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    edad: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  mostrar(): void {
  }

}
