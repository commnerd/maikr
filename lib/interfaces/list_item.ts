export interface ListItem {
    index(): number;
    setIndex(index: number): void;
    short(): string;
    long(): string;
}