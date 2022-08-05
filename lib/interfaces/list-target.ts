export interface ListTarget {
    toList(): Array<string>;
    update(index: number, value: string);
    remove(index: number);
    appendEmpty();
    orderUpdate(first:number, last:number);
}