import { ItemSet, List as ListInterface } from '../interfaces/list';

export class List implements ListInterface {
    private itemset: ItemSet;

    items(): ItemSet {
        return this.itemset;
    }

    remove(index: number): ListInterface {
        if (Array.isArray(this.itemset)) {
            this.itemset.splice(index, 1);
        }
        else {
            this.itemset.remove(index);
        }
        return this;
    }

    length(): number {
        if (Array.isArray(this.itemset)) {
            return this.itemset.length;
        }
        return this.itemset.toArray().length;
    }

    moveItems(i1: number, i2: number, alg?: Function | undefined): ListInterface {
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