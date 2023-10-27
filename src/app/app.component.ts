import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './menu.component.css']
})
export class AppComponent implements OnInit {

  token: any = localStorage.getItem('token');

  get getUsuario(): FormControl {
    return this.formUser.get('usuario') as FormControl;
  }
  get getPassword(): FormControl {
    return this.formUser.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder, private service: AuthService) { }

  ngOnInit(): void {

  }

  formUser = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]

  });


  mostrar(): void {
    const data = this.formUser.value as FormGroup;
    this.service.login(data).subscribe((res: any) => {

      switch (res.message) {
        case 'logged in session successful':
          Swal.fire({
            icon: 'success',
            text: 'Bienvenido al sistema',
          }).then(() => {
            const token = res.token;
            localStorage.setItem("token", token);
            window.location.reload();
          });
          break;
        case 'No autorizado, password erronea':
          Swal.fire({
            icon: 'error',
            text: 'Contraseña erronea, intente nuevamente',
          });
          break;
        case 'No autorizado, email no registrado.':
          Swal.fire({
            icon: 'error',
            text: 'usuario erroneo, intente nuevamente',
          });
          break;
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        text: 'Actualmente no se puede realizar la peticion, intente mas tarde',
      })
    });
  }


}
