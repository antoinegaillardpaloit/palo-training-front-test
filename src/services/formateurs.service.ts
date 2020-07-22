import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  constructor(private http: HttpClient) { }

  getAllFormateurs() {
    return this.http.get(`${environment.apiUrl}/formateurs`).pipe(map(res => res));
  }

  getFormateur(formateurId: any) {
    return this.http.get(`${environment.apiUrl}/formateurs/${formateurId}`).pipe(map(res => res));
  }
}