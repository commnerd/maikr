export interface ListItemFactory<T> {
  empty(): T;
  fromJson(json: Object): T;
}
