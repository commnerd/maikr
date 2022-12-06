import { StoredModel } from "./stored-model";

/**
 * Basic model definition
 */
export interface Model {
    fill(vals: {}): Model;
}