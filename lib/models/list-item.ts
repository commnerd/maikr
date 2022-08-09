import { MongoModel } from "./mongo-model";

export interface ListItem extends MongoModel {
    entry: string;
}