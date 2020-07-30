import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MultiplosService {
  private url = 'https://numerosm-1f94a.firebaseio.com';

  constructor(private http: HttpClient) {}

  guardarMultiplo(data: any) {
    return this.http.post(`${this.url}/multiplos.json`, data);
  }

  obtenerMultiploId(id: any) {
    return this.http.get(`${this.url}/multiplos/${id}`);
  }

  obtenerMultiplos() {
    return this.http.get(`${this.url}/multiplos.json`).pipe(map((resp) => this.crearArreglo(resp)));
  }

  crearArreglo(data: any) {
    const multiplos: any[] = [];

    Object.keys(data).forEach((key) => {
      const multiplo: any = data[key];
      multiplo.id = key;
      multiplos.push(multiplo);
    });

    return multiplos;
  }
}
