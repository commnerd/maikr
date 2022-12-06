"use strict";
exports.__esModule = true;
exports.BrowserStorage = void 0;
var indexed_db_1 = require("./browser/indexed-db");
var BrowserStorage = /** @class */ (function () {
    function BrowserStorage(db) {
        this.db = new indexed_db_1.IndexedDb('maikr');
        if (db != undefined) {
            this.db = db;
        }
    }
    ;
    BrowserStorage.prototype.getSlug = function () {
        return "browser-storage";
    };
    BrowserStorage.prototype.getLabel = function () {
        return "Browser Storage";
    };
    BrowserStorage.prototype.list = function () {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.list();
    };
    BrowserStorage.prototype.setItem = function (key, value) {
        var _a;
        (_a = this.db) === null || _a === void 0 ? void 0 : _a.setItem(key, value);
    };
    BrowserStorage.prototype.create = function (model) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.create(model);
    };
    BrowserStorage.prototype.read = function (id) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.read(id);
    };
    BrowserStorage.prototype.update = function (model) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a.update(model);
    };
    BrowserStorage.prototype["delete"] = function (id) {
        var _a;
        return (_a = this.db) === null || _a === void 0 ? void 0 : _a["delete"](id);
    };
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;
//# sourceMappingURL=browser.js.map