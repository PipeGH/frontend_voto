import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'

})
export class AuthService {
  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  login(data: FormGroup) {
    console.log(data);

    return this.http.post<{ status: number; message: string; token: string; }>(`${this.url}/api/v1/auth/login`, data);
  }

}
