import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectService } from '@services/project.service';
import { Project } from '@models/project';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'project-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  form: FormGroup = this.fb.group({
    'type': ['', Validators.compose([Validators.required])],
    'phase': ['', Validators.compose([Validators.required])]
  });

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(project: Project) {
    this.projectService.save(project)
      .then(() => this.router.navigate(["/"]));
  }

}
