import { Injectable } from '@angular/core';

import { List } from '@maikr/models/list';

@Injectable({
  providedIn: 'root'
})
export class ListFactoryService {

  constructor() { }

  new(): List {
    return new List();
  }
}
