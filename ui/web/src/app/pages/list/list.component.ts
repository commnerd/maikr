import { Component, OnInit } from '@angular/core';
import { List } from '@maikr/interfaces/list';

import { ListFactoryService } from 'src/app/services/list-factory.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list!: List;

  constructor(
    private listFactory: ListFactoryService
  ) { }

  ngOnInit(): void {
    this.list = this.listFactory.new();
  }

}
