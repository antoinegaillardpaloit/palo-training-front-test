import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient) { }

  getAllFormations() {
    return this.http.get(`${environment.apiUrl}/formations`).pipe(map(res => res));
  }

  getFormation(formationId) {
    return this.http.get(`${environment.apiUrl}/formations/${formationId}`).pipe(map(res => res));
  }
}