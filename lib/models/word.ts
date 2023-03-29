import { MongoModel } from "./mongo-model";

export interface Word extends MongoModel {
    word: string;
    collected_at: Date;
}