import { Component, Input, NgIterable, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { List } from '@maikr/interfaces/list';

@Component({
  selector: 'drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent implements OnInit {

  @Input() list!: List;
  @Output() listChange: EventEmitter<List> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.list.length() <= 0) {
      this.list.add();
    }
  }

  remove(index: number) {
    this.list.remove(index);
  }

  drop(ev: CdkDragDrop<any, any, any>) {

  }

  update(index: number, value: string) {
    if (value === "") {
      this.list.remove(index);
      return;
    }
    if (this.list.items()[this.list.length() - 1].short() !== "") {
      this.list.add();
      return;
    }
    this.list.update(index, value);
  }

}
