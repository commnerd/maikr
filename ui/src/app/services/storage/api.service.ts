import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { environment } from '@environments/environment';
import { MongoModel } from '@maikr/lib/models/mongo-model';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T extends MongoModel> {

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

  list(filter?: Object): Promise<Array<T>> {
    return firstValueFrom(this.httpClient.get<Array<T>>(this._endpoint, filter));
  }

  get(id: string): Promise<T> {
    return firstValueFrom(this.httpClient.get<T>(`${this._endpoint}/${id}`));
  }

  save(el: T): Promise<T> {
    if(el._id) {
      return firstValueFrom(this.httpClient.put<T>(`${this._endpoint}/${el._id}`, el));
    }
    return firstValueFrom(this.httpClient.post<T>(this._endpoint, el));
  }

  delete(id: string): Promise<boolean> {
    return firstValueFrom(this.httpClient.delete<boolean>(id));
  }

  updateBatch(batch: Array<T>): Promise<Array<T>> {
    console.log("Sending: ", batch);
    return firstValueFrom(this.httpClient.put<Array<T>>(`${this._endpoint}/batch_update`, batch));
  }
}
