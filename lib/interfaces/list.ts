import { ListItem } from './list-item';

export interface List extends Iterable<ListItem> {
    items(): Array<ListItem>;
    add(i?: ListItem): void;
    remove(index: number): List;
    length(): number;
    moveItems(i1: number, i2: number, alg?: Function): List;
    update(index: number, value: string): void;
}