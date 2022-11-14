import { Injectable } from '@angular/core';
import { ListItem } from '@maikr/models/list-item';

@Injectable({
  providedIn: 'root'
})
export class ListItemFactoryService {

  constructor() { }

  new(): any {
    console.log(ListItem);
    return new ListItem();
  }
}
