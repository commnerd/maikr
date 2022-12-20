import { ListItemIterator } from './list-item-iterator';
export class List {
    constructor(listItems) {
        if (listItems == undefined) {
            listItems = [];
        }
        if (!Array.isArray(listItems)) {
            listItems = Array.from(listItems);
        }
        this.listItems = Array.from(listItems);
    }
    items() {
        return this.listItems;
    }
    add(i) {
        this.listItems.push(i);
    }
    remove(index) {
        this.listItems.splice(index, 1);
        return this;
    }
    length() {
        return this.listItems.length;
    }
    moveItems(i1, i2, alg) {
        return this;
    }
    update(index, value) {
        this.listItems[index].setShort(value);
    }
    [Symbol.iterator]() {
        return new ListItemIterator(this.items());
    }
}
//# sourceMappingURL=list.js.map