import { GlobalId } from "./global-id";
import { LocalId } from "./local-id";
import { Model } from "./model";

export interface StoredModel extends Model {
    getLocalId(): LocalId;
    setLocalId(id: LocalId): void;
    getGlobalId(): GlobalId;
    save(): Promise<StoredModel>;
    delete(): Promise<boolean>;
}