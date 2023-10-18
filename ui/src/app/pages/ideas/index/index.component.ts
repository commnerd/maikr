import { Component } from '@angular/core';
import { IdeaService } from '../../../services/idea.service';
import { Idea } from '@models/idea';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  ideas$ : Observable<Array<Idea>> = this.ideaService.list();

  constructor(
    private ideaService: IdeaService
  ) {}

  
}
