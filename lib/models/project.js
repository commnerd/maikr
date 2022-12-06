"use strict";
exports.__esModule = true;
exports.Project = void 0;
var enums_1 = require("@maikr/enums");
var browser_1 = require("./storage/browser");
var Project = /** @class */ (function () {
    function Project(storage) {
        this._storage = null;
        this._globalId = null;
        this._localId = null;
        this._name = '';
        if (!storage) {
            storage = new browser_1.BrowserStorage();
        }
        this._storage = storage;
    }
    Project.prototype.fill = function (vals) {
        this._globalId = vals['globalId'];
        this._localId = vals['localId'];
        return this;
    };
    Project.fill = function (vals) {
        var project = new Project();
        return project;
    };
    Project.prototype.getLocalId = function () {
        return this._localId;
    };
    Project.prototype.setLocalId = function (id) {
        this._localId = id;
    };
    Project.prototype.getGlobalId = function () {
        return this._globalId;
    };
    Project.prototype.getName = function () {
        return this._name;
    };
    Project.prototype.getPhase = function () {
        return enums_1.Phase.Idea;
    };
    Project.prototype.getType = function () {
        return enums_1.Type.Software;
    };
    Project.prototype.save = function () {
        var _a, _b;
        if (this._localId) {
            return ((_a = this._storage) === null || _a === void 0 ? void 0 : _a.update(this)) || new Promise(function (_) { return new Project(); });
        }
        return ((_b = this._storage) === null || _b === void 0 ? void 0 : _b.create(this)) || new Promise(function (_) { return new Project(); });
    };
    Project.prototype["delete"] = function () {
        var _a;
        return ((_a = this._storage) === null || _a === void 0 ? void 0 : _a["delete"](this.getLocalId())) || new Promise(function (_) { return false; });
    };
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map