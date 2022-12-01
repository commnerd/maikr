import { List as ListInterface, ListItem } from '@maikr/interfaces';
import { ListItemIterator } from './list-item-iterator';

export class List implements ListInterface {
    private listItems!: Array<ListItem>;

    constructor(listItems?: Iterable<ListItem>) {
        if (listItems == undefined) {
            listItems = [];
        }

        if (!Array.isArray(listItems)) {
            listItems = Array.from(listItems);
        }

        this.listItems = Array.from(listItems);
    }

    items(): Array<ListItem> {
        return this.listItems;
    }

    add(i: ListItem): void {
        this.listItems.push(i);
    }

    remove(index: number): ListInterface {
        this.listItems.splice(index, 1);

        return this;
    }

    length(): number {
        return this.listItems.length;
    }

    moveItems(i1: number, i2: number, alg?: Function | undefined): ListInterface {
        return this;
    }

    update(index: number, value: string): void {
        this.listItems[index].setShort(value)
    }

    [Symbol.iterator](): Iterator<ListItem, any, undefined> {
        return new ListItemIterator(this.items());
    }

}