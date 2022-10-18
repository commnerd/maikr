import { Paged } from './Paged';
import { Model } from './Model';
import { Id } from './Id';

/**
 * The interface for interacting with all storage medium
 */
export interface Storage {
    /**
     * Retrieve the slug for the storage medium
     */
    getSlug(): string;

    /**
     * Get the displayable label for the storage medium 
     */
    getLabel(): string;

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