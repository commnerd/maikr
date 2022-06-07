import { Injectable } from '@angular/core';
import { Task } from '@maikr/lib/models/task';

import { ApiService } from './storage/api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService<Task> {
  protected override endpoint: string = "tasks";
}