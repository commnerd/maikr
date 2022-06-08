import { MongoModel } from "./mongo-model";

export interface Log extends MongoModel {
    name: string;
}