import { moveItemInArray } from "@angular/cdk/drag-drop";
import { ListTarget } from "@maikr/lib/interfaces/list-target";

export class ListWrapper<T> implements ListTarget<T> {
    constructor(
        private _list: Array<T>,
        private _key: string
    ) { }

    get list(): Array<T> { return this._list; }

    update(index: number, value: string): void {
        (this._list[index] as any)[this._key] = value;
        console.log(this.needsOneMore());
        if (this.needsOneMore()) {
            this.appendEmpty();
        }
    }

    remove(index: number): void {
        this._list.splice(index, 1);
        if (this.needsOneMore()) {
            this.appendEmpty();
        }
    }

    appendEmpty(): void {
        if (this.needsOneMore()) {
            let newItem = {} as any;
            newItem[this._key] = "";
            setTimeout(() => {
                this._list.push(newItem as T);
            });
        }
    }

    private needsOneMore(): boolean {
        let item: any = this._list[this._list.length - 1];
        console.log(item);
        if (item == undefined) {
            return true;
        }
        if (item == null) {
            return true;
        }
        if (item[this._key] !== "") {
            return true;
        }
        return false;
    }

    orderUpdate(first: number, last: number): void {
        moveItemInArray(this._list, first, last);
    }
}