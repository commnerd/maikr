import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Project } from '../../../../../../../lib/models';
import { Router } from '@angular/router';

@Component({
  selector: 'project-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form: FormGroup = this.fb.group({
    'name': ['', Validators.compose([Validators.required])],
    'description': ['', Validators.compose([Validators.required])]
  });

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(projectData: any) {
    console.log(Project);
    let project = new Project();

    project.save()
      .then(savedProject => this.router.navigate([savedProject.getLocalId(), "definition"]));
  }

}
