"use strict";
exports.__esModule = true;
exports.IndexedDb = void 0;
var IndexedDb = /** @class */ (function () {
    function IndexedDb(name, version) {
        this.length = 0;
        this.conn = window.indexedDB.open(name, version);
        this.conn.onerror = function (event) {
            console.error("Why didn't you allow my web app to use IndexedDB?!");
        };
        this.conn.onsuccess = function (event) {
            console.log("Yay?");
        };
        this.conn.onupgradeneeded = function (event) {
            // Create another object store called "names" with the autoIncrement flag set as true.
            // const objStore = this.conn.transaction?.objectStore(this.context).
        };
    }
    IndexedDb.prototype.getSlug = function () {
        return "indexed-db";
    };
    IndexedDb.prototype.getLabel = function () {
        return "Indexed DB";
    };
    IndexedDb.prototype.setStore = function (store) {
        this.store = store;
    };
    IndexedDb.prototype.clear = function () {
        var _a;
        (_a = this.conn.transaction) === null || _a === void 0 ? void 0 : _a.objectStore(this.store || "").clear();
    };
    IndexedDb.prototype.getItem = function (key) {
        var _a;
        if (key !== null) {
            return (_a = this.conn.transaction) === null || _a === void 0 ? void 0 : _a.objectStore(this.store || "").get(key).result;
        }
        return null;
    };
    IndexedDb.prototype.removeItem = function (key) {
        var _a;
        (_a = this.conn.transaction) === null || _a === void 0 ? void 0 : _a.objectStore(this.store || "")["delete"](key);
    };
    IndexedDb.prototype.setItem = function (key, value) {
        var _a;
        (_a = this.conn.transaction) === null || _a === void 0 ? void 0 : _a.objectStore(this.store || "").put(value, key);
    };
    IndexedDb.prototype.list = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            resolve((_a = _this.conn.transaction) === null || _a === void 0 ? void 0 : _a.objectStore(_this.store || "").getAll().result);
            reject("Failed to generate model list");
        });
    };
    IndexedDb.prototype.create = function (model) {
        this.store = model.constructor.name;
        return this.update(model);
    };
    IndexedDb.prototype.read = function (id) {
        return JSON.parse(this.getItem(id) || "");
    };
    IndexedDb.prototype.update = function (model) {
        var promise = new Promise(function (resolve, reject) {
            resolve(model);
            reject("Failed to update model");
        });
        var id = model.getLocalId();
        if (!model.getLocalId()) {
            model.setLocalId(id);
        }
        this.setItem((id === null || id === void 0 ? void 0 : id.toString()) || this['makeid'](25), JSON.stringify(model));
        return promise;
    };
    IndexedDb.prototype["delete"] = function (id) {
        this.removeItem(id);
        var promise = new Promise(function (resolve, reject) {
            resolve(true);
            reject("Failed to delete model");
        });
        return promise;
    };
    IndexedDb.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    return IndexedDb;
}());
exports.IndexedDb = IndexedDb;
//# sourceMappingURL=indexed-db.js.map