import { Component, OnInit } from '@angular/core';
import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';

import { ProjectService } from '@services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  step = 0;
  projectTypes = Object.values(ProjectType || {});
  projectPhases = Object.keys(ProjectPhase || {});
  projects$ = this.projectService.list();

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
