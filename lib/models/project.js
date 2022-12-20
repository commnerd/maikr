import { Type } from '@maikr/enums';
import { BrowserStorage } from "./storage/browser";
export class Project {
    constructor(storage) {
        this._storage = null;
        this._globalId = null;
        this._localId = null;
        this._name = '';
        /** TODO: FIX REFERENCES! */
        this._phase = 'idea'; // Phase.Idea;
        this._type = 'software'; // Type.Software;
        if (!storage) {
            storage = new BrowserStorage();
        }
        this._storage = storage;
    }
    fill(vals) {
        this._globalId = vals['globalId'];
        this._localId = vals['localId'];
        return this;
    }
    static fill(vals) {
        let project = new Project();
        return project;
    }
    get local_id() {
        return this._localId || null;
    }
    set local_id(id) {
        this._localId = id;
    }
    get global_id() {
        return this._globalId;
    }
    set global_id(id) {
        this._globalId = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get phase() {
        return this._phase;
    }
    set phase(phase) {
        this._phase = phase;
    }
    get type() {
        return Type.Software;
    }
    set type(type) {
        this._type = type;
    }
    save() {
        if (this._localId) {
            return this._storage?.update(this) || new Promise(_ => new Project());
        }
        return this._storage?.create(this) || new Promise(_ => new Project());
    }
    delete() {
        return this._storage?.delete(this.local_id) || new Promise(_ => false);
    }
}
//# sourceMappingURL=project.js.map