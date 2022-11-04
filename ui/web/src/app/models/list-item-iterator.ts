import { ListItem } from '../../../../../lib/interfaces/list-item';

export class ListItemIterator implements Iterator<ListItem> {
    private index = 0;
    private array: Array<ListItem> = [];

    constructor(items: Iterable<ListItem>) {
        this.array = Array.from(items);
    }

    next(...args: [] | [undefined]): IteratorResult<ListItem, any> {
        return {
            done: this.index >= this.array.length,
            value: this.array[this.index++],
        };
    }
}