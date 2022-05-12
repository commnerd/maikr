import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '@models/project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
 
  projects: Array<Project> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  newProject()  {
    this.router.navigate(["projects/new"])
  }

}

