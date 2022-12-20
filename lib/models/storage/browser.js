import { IndexedDb } from './browser/indexed-db';
export class BrowserStorage {
    constructor(db) {
        this.db = new IndexedDb('maikr');
        if (db != undefined) {
            this.db = db;
        }
    }
    ;
    getSlug() {
        return "browser-storage";
    }
    getLabel() {
        return "Browser Storage";
    }
    list() {
        return this.db?.list();
    }
    setItem(key, value) {
        this.db?.setItem(key, value);
    }
    create(model) {
        return this.db?.create(model);
    }
    read(id) {
        return this.db?.read(id);
    }
    update(model) {
        return this.db?.update(model);
    }
    delete(id) {
        return this.db?.delete(id);
    }
}
//# sourceMappingURL=browser.js.map