import { Injectable } from '@angular/core';

import { List } from '@maikr/models';

@Injectable({
  providedIn: 'root'
})
export class ListFactoryService {

  constructor() { }

  new(): List {
    return new List();
  }
}
