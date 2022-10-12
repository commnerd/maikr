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

  @Output() listChanged = new EventEmitter<Array<T>>()

  ngOnInit(): void {
    if (Array.isArray(this.list) && this.key != null) {
      this.appendEmpty();
    }
  }

  drop(event: CdkDragDrop<Array<T>>) {
    if (Array.isArray(this.list) && this.key != null) {
      moveItemInArray(this.list, event.previousIndex, event.currentIndex);
      this.listChanged.next(this.list);
    }
  }

  update(index: number, value: string) {
    if (Array.isArray(this.list) && this.key != null) {
      this.appendEmpty();
      this.listChanged.next(this.list);
    }
  }

  remove(index: number) {
    if (Array.isArray(this.list) && this.key != null) {
      this.list.splice(index, 1);
      this.listChanged.next(this.list);
    }
  }

  appendEmpty() {
    if (Array.isArray(this.list) && this.key != null) {
      if (
        this.list.length <= 0 ||
        (this.list[this.list.length - 1] as unknown as { [list: string]: string })[this.key].length > 0
      ) {
        let newItem: T = {} as T;
        (newItem as unknown as { [list: string]: string })[this.key] = "";
        setTimeout(() => {
          this.list?.push(newItem);
        });
      }
    }
  }
}
