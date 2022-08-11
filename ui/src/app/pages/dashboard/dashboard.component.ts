import { Component, OnInit } from '@angular/core';
import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';
import { Task } from '@maikr/lib/models/task';
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
  tasksToTriage$ = this.taskService.list({ project_id: undefined });
  tasksForToday$ = this.taskService.list();

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
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

  updateTasksToTriage(tasks: Array<Task>) {

  }
}

