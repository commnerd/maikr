import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Project } from '@models/project';
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  projects$: Observable<Array<Project>> = this.projectService.list();

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {}

}

