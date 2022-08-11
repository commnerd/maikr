import { moveItemInArray } from "@angular/cdk/drag-drop";
import { ListTarget } from "@maikr/lib/interfaces/list-target";

export class ListWrapper<T> implements ListTarget<T> {
    constructor(
        private _list: Array<T>,
        private _key: string
    ) {
        this.appendEmpty();
    }

    get list(): Array<T> { return this._list; }

    update(index: number, value: string): void {
        (this._list[index] as any)[this._key] = value;
    }

    remove(index: number): void {
        this._list.splice(index, 1);
    }

    appendEmpty(): void {
        if (Array.isArray(this._list) && (this._list.length <= 0 || (this._list[this._list.length - 1] as any)[this._key] !== "")) {
            console.log((this._list[this._list.length - 1] as any)[this._key] !== "");
            let newItem = {} as any;
            newItem[this._key] = "";
            this._list.push(newItem as T);
        }
    }

    orderUpdate(first: number, last: number): void {
        moveItemInArray(this._list, first, last);
    }
}