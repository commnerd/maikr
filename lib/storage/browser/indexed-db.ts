export class IndexedDb {
    private conn: IDBOpenDBRequest;

    public constructor(name: string, version?: number) {
        this.conn = window.indexedDB.open(name, version).;
    }
}