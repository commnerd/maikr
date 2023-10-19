import { Component } from '@angular/core';
import { IdeaService } from '../../../services/idea.service';
import { Idea } from '@models/idea';
import { Observable, last, map } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  ideas$ : Observable<Array<any>> = this.ideaService.list().pipe(
    map(values => values.map((value => new Idea(value)))),
  );

  constructor(
    private ideaService: IdeaService
  ) {}

  
}
