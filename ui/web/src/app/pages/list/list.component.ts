import { Component, OnInit } from '@angular/core';

import { List } from 'src/app/models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list!: List;

  constructor() { }

  ngOnInit(): void {
    this.list = new List([]);
  }

}
