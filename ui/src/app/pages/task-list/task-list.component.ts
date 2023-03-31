import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '@models/api/task';
import { ClientService } from '@services/api/client.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Array<Task>> = this.httpClient.list();

  constructor(
    private httpClient: ClientService<Task>
  ) { }

  ngOnInit(): void {
  }

}
