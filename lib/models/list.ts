import { ListIterator } from './list-iterator';

import { List as ListInterface } from '../interfaces/list';
import { ListItem } from '../interfaces/list_item';

export class List implements ListInterface {
    private itemset: Array<ListItem>;

    constructor(list?: Iterable<ListItem>) {
        if (list == undefined) {
            list = [];
        }
        this.itemset = Array.from(list);
    }

    [Symbol.iterator](): Iterator<ListItem> {
        return new ListIterator({ items: this.itemset });
    }

    items(): Array<ListItem> {
        return this.itemset;
    }

    add(i: ListItem): void {
        this.itemset;
    }

    remove(index: number): List {
        this.itemset.splice(index, 1);

        return this;
    }

    length(): number {
        return this.itemset.length;
    }

    moveItems(i1: number, i2: number, alg?: Function | undefined): List {
        if (i1 > i2) {
            return this.moveItems(i2, i1, alg);
        }
        if (alg) {
            alg(this.itemset, i1, i2);
            return this;
        }
        if (Array.isArray(this.itemset)) {
            this.itemset.forEach((item, index) => {
                if (index == i1) {
                    item.setIndex(i2);
                }
                if (index < i2) {
                    item.setIndex(index + 1);
                }
            });
        }

        return this;
    }

}