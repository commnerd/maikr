export interface ListTarget<T> {
    get list(): Array<T>;
    update(index: number, value: string): void;
    remove(index: number): void;
    appendEmpty(): void;
    orderUpdate(first: number, last: number): void;
}