import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Project } from '@maikr/lib/models/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint!: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.endpoint = environment.storage.api.url;
  }

  save(project: Project): Observable<Object> {
    return this.httpClient.post(this.endpoint, project);
  }
}
