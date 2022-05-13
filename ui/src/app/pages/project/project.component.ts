import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Project } from '@models/project';
import { ProjectService } from '@services/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects$: Observable<Array<Project>> = this.projectService.list();

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  newProject()  {
    this.router.navigate(["projects/new"])
  }

}

