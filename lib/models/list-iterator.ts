import { ListItem } from '../interfaces/list_item';

export class ListIterator implements Iterator<ListItem> {
    private index = 0;
    private array: Array<ListItem> = [];

    constructor({ items }: { items: Iterable<ListItem>; }) {
        this.array = Array.from(items);
    }

    next(...args: [] | [undefined]): IteratorResult<ListItem, any> {
        return {
            done: this.array[this.index] == undefined,
            value: this.array[this.index],
        };
    }
}