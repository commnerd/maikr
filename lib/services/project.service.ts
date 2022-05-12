import { Injectable } from '@angular/core';
import { Project } from '@maikr/lib/models/project';
import { Observable } from 'rxjs';

import { ApiService } from './storage/api.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private apiService: ApiService,
  ) { }

  save(project: Project): Observable<Object> {
    return this.apiService.save(project);
  }

}
