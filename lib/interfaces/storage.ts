import { Paged } from './paged';
import { Model } from './model';
import { Id } from './id';

/**
 * The interface for interacting with all storage medium
 */
export interface Storage {
    /**
     * List models with provided optional filters
     */
    list(): Promise<Paged<Model>>;

    /**
     * Create model in storage medium
     */
    create(model: Model): Promise<Model>;

    /**
     * Read model from storage medium
     */
    read(id: Id): Promise<Model>;

    /**
     * Update model in storage medium
     */
    update(model: Model): Promise<Model>;

    /**
     * Delete model from storage medium
     */
    delete(id: Id): Promise<boolean>;
}