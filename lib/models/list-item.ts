import { MongoModel } from "./mongo-model";

export interface ListItem extends MongoModel {
    list?: string;
    entry: string;
}