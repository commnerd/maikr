import { Injectable } from '@angular/core';
import { ListItem } from '@maikr/models';
import { ListItem as ListItemInterface } from '@maikr/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListItemFactoryService {

  constructor() { }

  new(): ListItemInterface {
    return new ListItem();
  }
}
