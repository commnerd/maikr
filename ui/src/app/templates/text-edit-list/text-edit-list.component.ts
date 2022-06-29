import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent<T extends {[key: string]: string}> implements OnInit {

  constructor() { }

  @Input() list!: Array<T | string>;
  @Input() key!: string;

  modList: Array<string> = [];

  @Output() listChanged = new EventEmitter<Array<T | string>>()

  ngOnInit(): void {
    this.modList = this.list.map((value: {[key: string]: string} | string) => {
      if(this.key != undefined && value instanceof Object) {
        return value[this.key] as string;
      }
      return value;
    }) as string[];
  }

  drop(event: CdkDragDrop<Array<T>>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.listChanged.next(this.list);
  }

  update(index: number, value: Event) {
    if(this.key) {
      this.list[index] = value as unknown as (T | string);
    }
    else {
      this.remove(index);
    }
    this.appendEmptyTask();
  }

  remove(index: number) {
    this.list.splice(index, 1);
    this.modList.splice(index, 1);
  }

  appendEmptyTask() {
    if(
      this.modList.length <= 0 ||
      this.modList[this.modList.length - 1].length > 0
    ) {
      let newItem: T = {} as T;
      this.list.push(newItem);
    }
  }
}
