import { ListItem } from './list_item';

export interface List extends Iterable<ListItem> {
    items(): Iterable<ListItem>;
    add(i: ListItem): void;
    remove(index: number): List;
    length(): number;
    moveItems(i1: number, i2: number, alg?: Function): List;
}