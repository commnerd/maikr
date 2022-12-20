const MAKE_ID_LENGTH = 25;
export class IndexedDb {
    constructor(name, version) {
        this.length = 0;
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
        };
    }
    get slug() {
        return "indexed-db";
    }
    get label() {
        return "Indexed DB";
    }
    set store(store) {
        this._store = store;
    }
    clear() {
        this.conn.transaction?.objectStore(this._store || "").clear();
    }
    getItem(key) {
        if (key !== null) {
            return this.conn.transaction?.objectStore(this._store || "").get(key).result;
        }
        return null;
    }
    removeItem(key) {
        this.conn.transaction?.objectStore(this._store || "").delete(key);
    }
    setItem(key, value) {
        this.conn.transaction?.objectStore(this._store || "").put(value, key);
    }
    list() {
        return new Promise((resolve, reject) => {
            resolve(this.conn.transaction?.objectStore(this._store || "").getAll().result);
            reject("Failed to generate model list");
        });
    }
    create(model) {
        this.store = model.constructor.name;
        return this.update(model);
    }
    read(id) {
        return JSON.parse(this.getItem(id) || "");
    }
    update(model) {
        let promise = new Promise((resolve, reject) => {
            resolve(model);
            reject("Failed to update model");
        });
        let id = model.local_id || this.makeid(MAKE_ID_LENGTH);
        if (!model.local_id) {
            model.local_id = id;
        }
        this.setItem(id.toString(), JSON.stringify(model));
        return promise;
    }
    delete(id) {
        this.removeItem(id);
        let promise = new Promise((resolve, reject) => {
            resolve(true);
            reject("Failed to delete model");
        });
        return promise;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
//# sourceMappingURL=indexed-db.js.map