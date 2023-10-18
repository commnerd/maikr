import { Listable } from "@interfaces/listable";

export class Idea implements Listable {
    id ?: string;
    idea !: string;

    constructor(input: Idea | string | null) {
        if(typeof input == 'string') {
            this.idea = input;
        }
        if(input == null) {
            this.idea = '';
        }
        if(typeof input == 'object') {
            let keys = Object.keys(input as object);
            for(let key of keys) {
                (this as any)[key] = (input as any)[key];
            }
        }
    }

    line(): string {
        return this.idea;
    }
}