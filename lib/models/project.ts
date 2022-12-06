import { GlobalId, LocalId, Storage, Project as ProjectInterface, Model } from "@maikr/interfaces";

import { Phase, Type } from '@maikr/enums'

import { BrowserStorage } from "./storage/browser";

export class Project implements ProjectInterface {

    private _storage: Storage<ProjectInterface> | null = null;
    private _globalId: GlobalId = null;
    private _localId: LocalId = null;
    private _name: string = '';

    constructor(storage?: Storage<ProjectInterface>) {
        if(!storage) {
            storage = new BrowserStorage()
        }

        this._storage = storage;
    }

    fill(vals: {[key: string]: string}): Project {
        this._globalId = vals['globalId'];
        this._localId = vals['localId'];
        return this;
    }

    public static fill(vals: {}): Project {
        let project = new Project();
        
        

        return project;
    }

    getLocalId(): LocalId {
        return this._localId;
    }

    setLocalId(id: LocalId): void {
        this._localId = id;
    }

    getGlobalId(): GlobalId {
        return this._globalId;
    }

    getName(): string {
        return this._name;
    }

    getPhase(): Phase {
        return Phase.Idea
    }

    getType(): Type {
        return Type.Software;
    }

    save(): Promise<ProjectInterface> {
        if(this._localId) {
            return this._storage?.update(this) || new Promise(_ => new Project());
        }
        return this._storage?.create(this) || new Promise(_ => new Project());
    }

    delete(): Promise<boolean> {
        return this._storage?.delete(this.getLocalId()) || new Promise(_ => false);
    }
}