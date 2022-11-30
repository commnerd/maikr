import { ListItem } from './list-item';

/**
 * The interface for paginating result sets
 */
export interface Paged extends Iterable<ListItem> {
    firstPage(): Iterable<ListItem>;
    remove(index: number): void;
}