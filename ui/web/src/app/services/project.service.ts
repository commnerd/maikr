import { Injectable } from '@angular/core';
import { LocalId, Project as ProjectInterface, Paged, StoredModel } from '@maikr/interfaces';
import { Project } from '@maikr/models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private _storage: Storage
  ) {
  }

  get(id: LocalId): Promise<Project> {
    return new Promise((_ => new Project(this._storage['get']())))
  }

  new(): ProjectInterface {
    return new Project();
  }

  list(): Promise<Paged<Project>> {
    return this._storage['list']();
  }
}
