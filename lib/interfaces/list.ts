import { ListItem } from './list_item';
import { Paged } from './paged';

type ItemSet = Array<ListItem> | Paged<ListItem>;

export interface List {
    items(): ItemSet;
}