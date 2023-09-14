import { Inject, Self } from "@angular/core";
import { DataService } from "../services/data.service";

export abstract class Data {
    id ?: number;
    protected abstract fields: Array<string>;

    constructor(
        private dataService: DataService
    ) {}

    static list(): Promise<Array<unknown>> {
        let dataService = new DataService();
        return dataService.list();
    }

    public save<Data>(): Promise<any> {
        if(this.id == undefined) {
            return this.dataService.create(this);
        }
        return this.dataService.update(this);
    }

    public delete<Data>(): Promise<void> {
        return this.dataService.delete(this);
    } 
}