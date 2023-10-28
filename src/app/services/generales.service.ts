import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeneralesService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLugares() {
    return this.http.get(`${this.url}/api/v1/sitio`);
  }

  getMesas(id: number) {
    return this.http.get(`${this.url}/api/v1/mesas/${id}`);
  }

  getList(id: number) {
    return this.http.get(`${this.url}/api/v1/votos/selectOneMesa/${id}`);
  }
}
