import { Listable } from "@interfaces/listable";
import { ListItemFactory } from "@interfaces/list-item-factory";

export class Idea implements Listable, ListItemFactory<Idea> {
    id ?: string;
    idea !: string;

    constructor(input?: Idea | Object | string | null) {
        if(typeof input == 'string') {
            this.idea = input;
        }
        if('undefined' == typeof input || input == null) {
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

    updateLine(val: string): void {
      this.idea = val;
    }

    fromJson(json: Object): Idea {
      return new Idea(json);
    }

    empty(): Idea {
      return new Idea();
    }
}
