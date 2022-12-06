import { Paged } from './paged';
import { LocalId } from './local-id';
import { StoredModel } from './stored-model';

/**
 * The interface for interacting with all storage medium
 */
export interface Storage<T extends StoredModel> {
    /**
     * List models with provided optional filters
     */
    list(): Promise<Paged<T>>;

    /**
     * Create model in storage medium
     */
    create(model: T): Promise<T>;

    /**
     * Read model from storage medium
     */
    read(id: LocalId): Promise<T> | null;

    /**
     * Update model in storage medium
     */
    update(model: T): Promise<T>;

    /**
     * Delete model from storage medium
     */
    delete(id: LocalId): Promise<boolean>;
}