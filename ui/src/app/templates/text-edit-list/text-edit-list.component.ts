import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ListTarget } from '@lib/interfaces/list-target';

@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent {

  constructor() { }

  @Input() list!: ListTarget;

  drop(event: CdkDragDrop<Array<string>>) {
    this.list.orderUpdate(event.previousIndex, event.currentIndex);
  }

  update(index: number, value: string) {
    this.list.update(index, value);
  }

  remove(index: number) {
    this.list.remove(index);
  }

  appendEmpty() {
      this.list.appendEmpty();
  }
}  