import { Component, OnInit, NgIterable } from '@angular/core';
import { ListItem } from '@maikr/lib/interfaces/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: NgIterable<ListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
