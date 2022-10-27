import { Component, Input, OnInit, Output, EventEmitter, NgIterable } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { List } from '@maikr/lib/interfaces/list';
import { ListItem } from '@maikr/lib/interfaces/list_item';

@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent implements OnInit {

  @Input() list!: List;

  @Output() listChanged = new EventEmitter<List>()

  constructor() { }

  ngOnInit(): void {
    if (this.list.length() <= 0) {
      this.list.add({} as ListItem);
    }
  }

  drop(event: CdkDragDrop<NgIterable<ListItem>>) {
    this.list.moveItems(event.previousIndex, event.currentIndex, moveItemInArray);
    this.listChanged.next(this.list);
  }

  update(index: number, value: string) {
    this.listChanged.next(this.list);
  }

  remove(index: number) {
    this.list.remove(index);
    this.listChanged.next(this.list);
  }
}