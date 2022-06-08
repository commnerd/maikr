import { ListItem } from "./list-item";
import { MongoModel } from "./mongo-model";
export interface List extends MongoModel {
    name: string;
    items: Array<ListItem>;
}