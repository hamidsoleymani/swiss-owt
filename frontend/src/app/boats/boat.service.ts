import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Boat } from './boat.model';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  private http = inject(HttpClient);

  findAll(page = 0, size = 10): Observable<Page<Boat>> {

    return this.http.get<Page<Boat>>(
      `/api/boats?page=${page}&size=${size}`
    );

  }

  findById(id: number): Observable<Boat> {
    return this.http.get<Boat>(
      `/api/boats/${id}`
    );

  }

  create(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(
      '/api/boats',
      boat
    );

  }

  update(id: number, boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(
      `/api/boats/${id}`,
      boat
    );

  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(
      `/api/boats/${id}`
    );

  }

}
