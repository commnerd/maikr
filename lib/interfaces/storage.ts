import { Paged } from './paged';
import { Model } from './model';
import { Id } from './id';
import { RunContext } from './run_context';

/**
 * The interface for interacting with all storage medium
 */
export interface Storage extends RunContext {
    /**
     * List models with provided optional filters
     */
    list(): Promise<Paged<Model>>;

    /**
     * Create model in storage medium
     */
    create(Model): Promise<Model>;

    /**
     * Read model from storage medium
     */
    read(Id): Promise<Model>;

    /**
     * Update model in storage medium
     */
    update(Model): Promise<Model>;

    /**
     * Delete model from storage medium
     */
    delete(Id): Promise<boolean>;
}