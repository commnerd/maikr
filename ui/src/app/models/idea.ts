

export class Idea {
    id ?: string;
    line !: string;

    constructor(input: Idea | string | null) {
        if(typeof input == 'string') {
            this.line = input;
        }
        if(input == null) {
            this.line = '';
        }
        if(typeof input == 'object') {
            let keys = Object.keys(input as object);
            for(let key of keys) {
                (this as any)[key] = (input as any)[key];
            }
        }
    }
}