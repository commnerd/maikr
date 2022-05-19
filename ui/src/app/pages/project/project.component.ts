import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '@models/project';
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'project-index',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects$: Observable<Array<Project>> = this.projectService.list();

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {}
}
