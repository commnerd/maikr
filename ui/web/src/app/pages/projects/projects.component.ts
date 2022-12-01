import { Component, OnInit } from '@angular/core';

import { Project } from '@maikr/models/project';
// import { ProjectService } from '@services/project.service';

@Component({
  selector: 'project-index',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Promise<Array<Project>> | null = null; // this.projectService.list();

  constructor(
    // private projectService: ProjectService,
  ) { }

  ngOnInit(): void {}

  nextLink(project: Project): Array<string> {
    return ["/", "mvp", project._id];
  }

  nextLabel(project: Project): string {
    return 'mvp';
  }
}
