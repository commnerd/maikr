import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TaskService } from '@services/task.service';
import { Task } from '@models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'task-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form: FormGroup = this.fb.group({
    'short': ['', Validators.compose([Validators.required])],
    'long': ['', Validators.compose([Validators.required])]
  });

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(task: Task) {
    this.taskService.save(task)
      .then(() => this.router.navigate(["/", "dashboard"]));
  }

}
