import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  protected endpoint!: string;

  constructor(
    private httpClient: HttpClient
  ) {}

  save(project: T): Observable<T> {
    let endpoint = `${environment.storage.api.url}${this.endpoint}`;
    return this.httpClient.get(endpoint, project) as Observable<T>;
  }
}
