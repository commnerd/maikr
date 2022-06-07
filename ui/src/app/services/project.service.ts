import { Injectable } from '@angular/core';
import { Project } from '@maikr/lib/models/project';

import { ApiService } from './storage/api.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiService<Project> {
  protected override endpoint: string = "/projects";
}
