import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  tasksToTriage$ = this.taskService.list();
  tasksForToday$ = this.taskService.list();

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  updateTasksForToday(event: any) {
    console.log(event);
  }

  addProject(): void {
    this.router.navigate(['/', 'projects', 'new'])
  }

  addTask(): void {
    this.router.navigate(['/', 'tasks', 'new'])
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
