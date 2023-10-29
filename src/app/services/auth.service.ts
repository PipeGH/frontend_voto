import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  login(data: FormGroup) {
    console.log(data);

    return this.http.post<{ status: number; message: string; token: string }>(
      `${this.url}/api/v1/auth/login`,
      data
    );
  }

  isLogin(): boolean {
    const token: any = localStorage.getItem('token');
    if (
      this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      return false;
    }
    return true;
  }
}
