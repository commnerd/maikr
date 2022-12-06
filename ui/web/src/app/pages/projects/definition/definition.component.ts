import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectService } from '@services/project.service';
import { Project } from '@maikr/models/project';
import { Type, Phase } from '@maikr/enums';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'project-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  project!: Project;
  types: Array<string> = [Type.Software];
  phases: Array<string> = [Phase.Idea];

  form: FormGroup = this.fb.group({
    'type': ['', Validators.compose([Validators.required])],
    'phase': ['', Validators.compose([Validators.required])]
  });

  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    let id = this.route.snapshot.params['id'];
    this.projectService.get(id)?.then((project: Project) => {
      this.project = project;
    });
  }

  onSubmit(project: Project) {
    project.save()
      .then(() => this.router.navigate(["/"]));
  }

}
