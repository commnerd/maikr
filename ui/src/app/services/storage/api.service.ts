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
  ) { }

  list(filter?: Object): Promise<Array<T>> {
    let url = this.getUrl(filter);
    return firstValueFrom(this.httpClient.get<Array<T>>(url));
  }

  get(id: string, filter?: Object): Promise<T> {
    let url = this.getUrl(filter, id);
    return firstValueFrom(this.httpClient.get<T>(url));
  }

  save(el: T): Promise<T> {
    if (el._id) {
      return firstValueFrom(this.httpClient.put<T>(`${this._endpoint}/${el._id}`, el));
    }
    return firstValueFrom(this.httpClient.post<T>(this._endpoint, el));
  }

  delete(id: string): Promise<boolean> {
    return firstValueFrom(this.httpClient.delete<boolean>(id));
  }

  updateBatch(batch: Array<T>): Promise<Array<T>> {
    return firstValueFrom(this.httpClient.put<Array<T>>(`${this._endpoint}/batch_update`, batch));
  }

  private getUrl(filter?: Object, objId?: string) {
    let url = this._endpoint;
    if (objId) {
      url += `/${objId}`;
    }
    if (filter) {
      url += "?filter=" + JSON.stringify(filter);
    }
    return url;
  }
}
