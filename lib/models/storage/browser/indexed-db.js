"use strict";
exports.__esModule = true;
exports.IndexedDb = void 0;
var IndexedDb = /** @class */ (function () {
    function IndexedDb(name, version) {
        this.conn = window.indexedDB.open(name, version);
    }
    return IndexedDb;
}());
exports.IndexedDb = IndexedDb;
//# sourceMappingURL=indexed-db.js.map