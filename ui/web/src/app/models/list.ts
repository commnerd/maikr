import { List as MaikrList } from '@maikr/lib/models/list';

import { ListItem } from '@maikr/lib/interfaces/list_item';

export class List extends MaikrList {
    constructor(list?: Iterable<ListItem>) {
        super(list);
    }
}