import { ListItem as ListItemInterface } from '../../../../../lib/interfaces/list-item';

export class ListItem implements ListItemInterface {

    private indexVal: number = 0;
    private shortVal: string = '';
    private longVal: string = '';


    index(): number {
        return this.indexVal;
    }
    setIndex(index: number): void {
        this.indexVal = index;
    }
    short(): string {
        return this.shortVal;
    }
    setShort(value: string) {
        this.shortVal = value;
    }
    long(): string {
        return this.longVal;
    }
}