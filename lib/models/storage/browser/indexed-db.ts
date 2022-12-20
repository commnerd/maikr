import { LocalId, Model, ListItem, StoredModel, Storage, Paged } from '@maikr/interfaces';

const MAKE_ID_LENGTH = 25;

export class IndexedDb implements Storage<StoredModel> {
    private conn: IDBOpenDBRequest;
    private _store?: string;

    constructor(name: string, version?: number) {
        this.conn = window.indexedDB.open(name, version);
        this.conn.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!");
        };
        this.conn.onsuccess = (event) => {
            console.log("Yay?");
        };
        this.conn.onupgradeneeded = (event) => {
          
            // Create another object store called "names" with the autoIncrement flag set as true.
            // const objStore = this.conn.transaction?.objectStore(this.context).
        }
    }
    
    [name: string]: any;

    length: number = 0;

    get slug(): string {
        return "indexed-db";
    }

    get label(): string {
        return "Indexed DB";
    }

    set store(store: string) {
        this._store = store;
    }

    clear(): void {
        this.conn.transaction?.objectStore(this._store || "").clear();
    }

    getItem(key: LocalId): string | null {
        if(key !== null) {
            return this.conn.transaction?.objectStore(this._store || "").get(key).result;
        }
        return null;
    }

    removeItem(key: string): void {
        this.conn.transaction?.objectStore(this._store || "").delete(key);
    }

    setItem(key: string, value: string): void {
        this.conn.transaction?.objectStore(this._store || "").put(value, key);
    }

    list<T extends StoredModel>(): Promise<Paged<T>> {
        return new Promise((resolve, reject) => {
            resolve(this.conn.transaction?.objectStore(this._store || "").getAll().result as unknown as Paged<T>);
            reject("Failed to generate model list");
        });
    }

    create<T extends StoredModel>(model: T): Promise<T> {
        this.store = model.constructor.name;
        return this.update(model);
    }

    read<T extends StoredModel>(id: LocalId): Promise<T> {
        return JSON.parse(this.getItem(id) || "");
    }

    update<T extends StoredModel>(model: T): Promise<T> {
        let promise: Promise<T> = new Promise((resolve, reject) => {
            resolve(model);
            reject("Failed to update model");
        });
        let id: LocalId = model.local_id || this.makeid(MAKE_ID_LENGTH);
        if(!model.local_id) {
            model.local_id = id;
        }
        this.setItem(id.toString(), JSON.stringify(model));

        return promise;
    }
    
    delete(id: LocalId): Promise<boolean> {
        this.removeItem(id as string);
        let promise: Promise<boolean> = new Promise((resolve, reject) => {
            resolve(true);
            reject("Failed to delete model");
        });
        return promise;
    }

    private makeid(length: number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
}