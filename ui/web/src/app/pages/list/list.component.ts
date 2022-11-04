import { Component, OnInit } from '@angular/core';
import { List } from '@maikr/interfaces/list';
import { List as ListModel } from '../../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: List = new ListModel();

  constructor() { }

  ngOnInit(): void {
  }

}
