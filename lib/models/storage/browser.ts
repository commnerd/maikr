import { StoredModel, Paged, LocalId } from '@maikr/interfaces';
import { Storage } from '@maikr/interfaces/storage';

import { IndexedDb } from './browser/indexed-db';

export class BrowserStorage implements Storage<StoredModel>
{
    private db: IndexedDb = new IndexedDb('maikr');

    constructor(
        db?: IndexedDb
    ) {
        if(db != undefined) {
            this.db = db;
        }
    };

    getSlug(): string {
        return "browser-storage";
    }

    getLabel(): string {
        return "Browser Storage";
    }

    
    list<T extends StoredModel>(): Promise<Paged<T>> {
        return this.db?.list();
    }

    setItem(key: string, value: string): void {
        this.db?.setItem(key, value);
    }
    
    create<T extends StoredModel>(model: T): Promise<T> {
        return this.db?.create(model);
    }

    read<T extends StoredModel>(id: LocalId): Promise<T> {
        return this.db?.read(id);
    }

    update<T extends StoredModel>(model: T): Promise<T> {
        return this.db?.update(model);
    }
    
    delete(id: LocalId): Promise<boolean> {
        return this.db?.delete(id);
    }
}