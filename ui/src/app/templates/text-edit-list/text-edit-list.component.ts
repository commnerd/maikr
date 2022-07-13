import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent<T> implements OnInit {

  constructor() { }

  @Input() list: Array<T> | null = [];
  @Input() key: string | null = "";

  strList: Array<string> = [];

  @Output() listChanged = new EventEmitter<Array<T>>()

  ngOnInit(): void {
    if(Array.isArray(this.list) && this.key != null) {
      this.strList = this.list.map(item => (item as unknown as {[key: string]: string})[this.key as string] as string);
      this.appendEmpty();
    }
  }

  drop(event: CdkDragDrop<Array<T>>) {
    if(Array.isArray(this.list) && this.key != null) {
      moveItemInArray(this.list, event.previousIndex, event.currentIndex);
      moveItemInArray(this.strList, event.previousIndex, event.currentIndex);
      this.listChanged.next(this.list);
    }
  }

  update(index: number, value: string) {
    if(Array.isArray(this.list) && this.key != null) {
      this.strList[index] = value;
      (this.list[index] as unknown as {[list: string]: string})[this.key] = this.strList[index];
      this.appendEmpty();
    }
  }

  remove(index: number) {
    if(Array.isArray(this.list) && this.key != null) {
      this.list.splice(index, 1);
      this.strList.splice(index, 1);
    }
  }

  appendEmpty() {
    if(Array.isArray(this.list) && this.key != null) {
      if(
        this.list.length <= 0 ||
        (this.list[this.list.length - 1] as unknown as {[list: string]: string})[this.key].length > 0
      ) {
        let newItem: T = {} as T;
        (newItem as unknown as {[list: string]: string})[this.key] = "";
        setTimeout(() => {
          this.list?.push(newItem);
          this.strList.push("");
        });
      }
    }
  }
}
