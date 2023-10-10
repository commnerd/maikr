import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { IdeaService } from '../../../services/idea.service';
import { Idea } from 'src/app/models/idea';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  ideas !: Array<Idea>;

  constructor(
    private ideaService: IdeaService
  ) {}

  ngOnInit(): void {
    let subscription = this.ideaService.list().subscribe(ideas => {
      this.ideas = ideas;
      setTimeout(() => subscription.unsubscribe(), 0);
    });
  }

  drop(event: CdkDragDrop<Idea[]>) {
    moveItemInArray(this.ideas, event.previousIndex, event.currentIndex);
  }
}
