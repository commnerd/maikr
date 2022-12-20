import { GlobalId } from "./global-id";
import { LocalId } from "./local-id";
import { Model } from "./model";

export interface StoredModel extends Model {
    local_id?: LocalId;
    global_id?: GlobalId;
    save(): Promise<StoredModel>;
    delete(): Promise<boolean>;
}