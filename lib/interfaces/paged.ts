/**
 * The interface for paginating result sets
 */
export interface Paged<Pageable> extends Iterable<Pageable> {
    firstPage(): Iterable<Pageable>;
    remove(index: number): void;
}