import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: AuthService) {}

  canActivate(): boolean {
    if (!this.loginService.isLogin()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Para acceder a este espacio primero debes iniciar sesión.',
      }).then((response) => {
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
        window.location.reload();
      });

      return false;
    }

    return true;
  }
}
