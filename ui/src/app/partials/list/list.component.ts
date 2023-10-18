import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Listable } from '@interfaces/listable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items!: Array<Listable> | null;

  drop(event: CdkDragDrop<string[]>) {
    if(this.items) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  }
}