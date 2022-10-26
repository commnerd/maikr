import { NgIterable } from "@angular/core";

import { List as MaikrList, } from '@maikr/lib/interfaces/list';
import { ListItem } from '@maikr/lib/interfaces/list_item';

class ListIterator implements Iterator<ListItem> {
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

export class List implements MaikrList, Iterable<ListItem> {
    private _items: Array<ListItem> = [];
    private _iteratorIndex: number = 0;

    constructor() {
        this._items = [];
    }

    toString(): string {
        return this._items.toString();
    }

    toLocaleString(): string {
        return "";
    }

    [Symbol.iterator](): Iterator<ListItem, any, undefined> {
        return new ListIterator({ items: this._items });
    }

    items(): NgIterable<ListItem> {
        return this._items;
    }

    add(item: ListItem): void {
        this._items.push(item);
    }

    remove(index: number): List {
        this._items.splice(index, 1);
        return this;
    }

    length(): number {
        let count = 0;
        for (const _ of this._items) {
            count++;
        }
        return count;
    }

    moveItems(i1: number, i2: number, alg?: Function | undefined): MaikrList {
        if (i2 > i1) {
            return this.moveItems(i2, i1, alg);
        }
        if (alg != undefined) {
            alg(this._items, i1, i2);
            return this;
        }
        let i = 0;
        for (const iterator of this._items) {
            if (i == i1) {
                iterator.setIndex(i2);
            }
            if (i > i1 && i < i2) {
                iterator.setIndex(i);
            }
        }
        return this;
    }
}