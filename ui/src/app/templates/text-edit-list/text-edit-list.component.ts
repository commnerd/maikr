import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent {

  constructor() { }

  @Input() list: Array<string> = [];
  @Output() listChanged = new EventEmitter<Array<string>>()

  drop(event: CdkDragDrop<Array<string>>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.listChanged.next(this.list);
  }

  update(index: number, value: string) {
    this.list[index] = value;
    this.listChanged.next(this.list);
  }

  remove(index: number) {
    this.list.splice(index, 1);
    this.listChanged.next(this.list);
  }

  appendEmpty() {
      if(this.list.length <= 0 || this.list[this.list.length - 1].length > 0) {
        this.list.push("");
      };
    }
  }  