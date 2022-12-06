import { Component, OnInit } from '@angular/core';
import { LocalId, Paged } from '@maikr/interfaces';

import { Project } from '@maikr/models/project';
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'project-index',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Promise<Paged<Project>> = this.projectService.list();

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {}

  nextLink(project: Project): Array<LocalId> {
    return ["/", "mvp", project.getLocalId()];
  }

  nextLabel(project: Project): string {
    return 'mvp';
  }
}
