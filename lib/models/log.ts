import { ListItem } from "./list-item";
import { MongoModel } from "./mongo-model";

export interface Log extends MongoModel {
    name: string;
    entries: Array<ListItem>;
}