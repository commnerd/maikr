import { DateTracked } from "../interfaces/date-tracked";
import { MongoModel } from "./mongo-model";

export interface Task extends MongoModel, DateTracked {
    parent_project: string;
    parent_task?: string;
    short: string;
    long: string;
}