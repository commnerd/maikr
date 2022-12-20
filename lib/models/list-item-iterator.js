export class ListItemIterator {
    constructor(items) {
        this.index = 0;
        this.array = [];
        this.array = Array.from(items);
    }
    next(...args) {
        return {
            done: this.index >= this.array.length,
            value: this.array[this.index++],
        };
    }
}
//# sourceMappingURL=list-item-iterator.js.map