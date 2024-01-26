import { Component } from '@angular/core';
import { IdeaService } from '../../../services/idea.service';
import { Idea } from '@models/idea';
import { Observable, last, map } from 'rxjs';
import { ListItemFactory } from "@interfaces/list-item-factory";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  ideas$ : Observable<Array<any>> = this.ideaService.list().pipe(
    map(values => values.map((value => new Idea(value)))),
  );

  ideaFactory : ListItemFactory<Idea> = new Idea();

  constructor(
    private ideaService: IdeaService
  ) {}

  itemsUpdate(event: Array<any>) {
    this.ideas$ = this.ideaService.saveList(event).pipe(
      map(values => values.map((value => new Idea(value)))),
    );
  }

  protected readonly Idea = Idea;
}
