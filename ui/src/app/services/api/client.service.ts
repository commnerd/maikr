import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService<T> {

  constructor(
    private httpClient: HttpClient
  ) {}
  
  list(): Observable<Array<T>> {
    return this.httpClient.get<Array<T>>('tasks');
  } 

  get(id: string): Observable<T> {
    return this.httpClient.get<T>(`tasks/${id}`);
  }

  post(data: T): Observable<T> {
    return this.httpClient.post<T>(`tasks`, data);
  }
}
