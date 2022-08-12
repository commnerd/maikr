import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ListTarget } from '@lib/interfaces/list-target';
import { ListWrapper } from './wrappers/list-wrapper';

@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent<T> implements OnInit {

  constructor() { }

  @Input() list: Array<T> | null = null;
  @Input() key!: string;
  _listTarget!: ListTarget<T>;

  @Output() listChanged: EventEmitter<Array<T>> = new EventEmitter<Array<T>>();

  ngOnInit(): void {
    if (this.key == null) {
      throw "Must provide a key to use on the object to use as a list item string value.";
    }
    if (this.list == null) {
      this.list = [];
    }
    this._listTarget = new ListWrapper(this.list, this.key);
    this._listTarget.appendEmpty();
    this.listChanged.emit(this.list);
  }

  listItems(): Array<string> {
    return this._listTarget.list.map(item => (item as any)[this.key]);
  }

  drop(event: CdkDragDrop<Array<T>>) {
    this._listTarget.orderUpdate(event.previousIndex, event.currentIndex);
  }

  update(index: number, value: string) {
    this._listTarget.update(index, value);
  }

  remove(index: number) {
    this._listTarget.remove(index);
  }
}  