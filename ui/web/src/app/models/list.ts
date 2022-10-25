import { NgIterable } from "@angular/core";

import { List as MaikrList, } from '@maikr/lib/interfaces/list';
import { ListItem } from '@maikr/lib/interfaces/list_item';

export class List implements MaikrList {
    private _items!: NgIterable<ListItem>;

    toString(): string {
        return this._items.toString();
    }

    toLocaleString(): string {
        return "";
    }

    *[Symbol.iterator](): Iterator<ListItem, any, undefined> {
        for (let i of this._items) {
            yield i;
        }
    }

    items(): NgIterable<ListItem> {
        return this._items;
    }

    remove(index: number): MaikrList {
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