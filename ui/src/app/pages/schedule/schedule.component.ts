import { Component, OnInit } from '@angular/core';
import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';

import { ProjectService } from '@services/project.service';
import { TaskService } from '@services/task.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  step = 0;
  dailyTasks$ = this.taskService.list();
  monthlyTasks$ = this.taskService.list();
  yearlyTasks$ = this.taskService.list();

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

}
