import { Component, Input, NgIterable, OnInit, Output, EventEmitter } from '@angular/core';

import { ListItem } from '@maikr/lib/interfaces/list-item';

@Component({
  selector: 'drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent implements OnInit {

  @Input() list!: NgIterable<ListItem>;
  @Output() listChange: EventEmitter<NgIterable<ListItem>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
