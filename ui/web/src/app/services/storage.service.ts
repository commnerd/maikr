import { Injectable } from '@angular/core';
import { Storage, StoredModel } from '@maikr/interfaces';
import { BrowserStorage } from '@maikr/models/storage/browser';
import { Paged } from '@maikr/interfaces/paged';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T extends StoredModel> {

  private _storage: Storage<T> = new BrowserStorage();

  constructor() {
  }

  get(): Storage<T> {
    return this._storage;
  }

  list(): Promise<Paged<T>> {
    return this._storage.list();
  }
}
