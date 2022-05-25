import { MongoModel } from "./mongo-model";

export interface Task extends MongoModel {
    parent_project: string;
    parent_task?: string;
    short: string;
    long: string;
}