import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom, Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  private readonly headers: Headers =
    new Headers({
      'Content-Type': 'application/json',
    })
  protected endpoint!: string;
  get _endpoint(): string {
    return `${environment.storage.api.url}${this.endpoint}`;
  }

  constructor(
    private httpClient: HttpClient
  ) {}

  list(): Observable<Array<T>> {
    return this.httpClient.get(this._endpoint) as Observable<Array<T>>;
  }

  save(project: T): Promise<T> {
    return firstValueFrom(this.httpClient.post(this._endpoint, project) as Observable<T>);
  }
}