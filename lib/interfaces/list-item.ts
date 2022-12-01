export interface ListItem {
    index(): number;
    setIndex(index: number): void;
    short(): string;
    setShort(value: string): void;
    long(): string;
}