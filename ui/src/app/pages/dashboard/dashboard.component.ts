import { Component, OnInit } from '@angular/core';
import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';

import { ProjectService } from '@services/project.service';
import { TaskService } from '@services/task.service';

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
  tasksToTriage$ = this.taskService.list({ parent_project: null, parent_task: null });
  tasksForToday$ = this.taskService.list({ parent_project: { $ne: null }, parent_task: { $ne: null } });

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
  }

  addProject(): void {
    // TODO: Navigate to project addition path
  }
  addTask(): void {
    // TODO: Navigate to task addition path
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
