import { Component, Input, OnInit, Output, EventEmitter, NgIterable } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Observable } from 'rxjs';

import { ItemSet, List } from '@maikr/lib/interfaces/list';

@Component({
  selector: 'text-edit-list',
  templateUrl: './text-edit-list.component.html',
  styleUrls: ['./text-edit-list.component.scss']
})
export class TextEditListComponent implements OnInit {

  @Input() list$!: Observable<List>;
  @Input() key!: string;

  @Output() listChanged = new EventEmitter<List>()

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  drop(event: CdkDragDrop<ItemSet>) {
    // event.moveItems(event.previousIndex, event.currentIndex, moveItemInArray);
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
