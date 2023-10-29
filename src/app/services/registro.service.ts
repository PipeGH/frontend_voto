import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLugares() {
    return this.http.get(`${this.url}/api/v1/sitio`);
  }

  getMesas(id: number) {
    return this.http.get(`${this.url}/api/v1/mesas/${id}`);
  }

  registro(data: FormGroup) {
    return this.http.post<{ status: number; message: string }>(
      `${this.url}/api/v1/votos/insert`,
      data
    );
  }
}
