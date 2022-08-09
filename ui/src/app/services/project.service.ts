import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@maikr/lib/models/project';
import { Observable } from 'rxjs';

import { ApiService } from './storage/api.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ApiService<Project> {
  protected override endpoint: string = "/api/v0.1.0/projects";
}
