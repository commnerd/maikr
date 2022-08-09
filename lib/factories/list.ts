import { Target as ListInterface } from "../interfaces/lists/target";
import { ListWrapper } from '../wrappers/list-wrapper';
export class List {
    public static new<T>(list: Array<T>, field: string): ListInterface<T> {
        return new ListWrapper<T>(list, field);
    }
}