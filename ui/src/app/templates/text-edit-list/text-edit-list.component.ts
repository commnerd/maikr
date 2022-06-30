import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent<T> implements OnInit {

  constructor() { }

  @Input() list?: Array<T> = [];
  @Input() key?: string = "";

  strList: Array<string> = [];

  @Output() listChanged = new EventEmitter<Array<T>>()

  ngOnInit(): void {
    if(this.list == null) {
      this.list = [];
    }
    this.strList = this.list!.map(item => (item as unknown as {[key: string]: string})[this.key!] as string);
  }

  drop(event: CdkDragDrop<Array<T>>) {
    moveItemInArray(this.list!, event.previousIndex, event.currentIndex);
    moveItemInArray(this.strList, event.previousIndex, event.currentIndex);
    this.listChanged.next(this.list!);
  }

  update(index: number, value: Event) {
    (this.list![index] as unknown as {[list: string]: string})[this.key!] = this.strList[index];
    this.appendEmptyTask();
  }

  remove(index: number) {
    this.list!.splice(index, 1);
    this.strList.splice(index, 1);
  }

  appendEmptyTask() {
    if(
      this.list!.length <= 0 ||
      (this.list![this.list!.length - 1] as unknown as {[list: string]: string})[this.key!].length > 0
    ) {
      let newItem: T = {} as T;
      this.list!.push(newItem);
      this.strList.push("");
    }
  }
}
