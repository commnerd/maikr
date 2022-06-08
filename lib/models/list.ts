import { MongoModel } from "./mongo-model";

export interface List extends MongoModel {
    name: string;
}