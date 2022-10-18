/**
 * The interface for paginating result sets
 */
export interface Paged<T> {
    firstPage(): Array<T>;
}