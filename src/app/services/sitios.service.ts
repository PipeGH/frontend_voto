import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SitiosService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLugares() {
    return this.http.get(`${this.url}/api/v1/sitio`);
  }
}
