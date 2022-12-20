import { GlobalId, LocalId, Storage, Project as ProjectInterface, Model } from "@maikr/interfaces";

import { Phase, Type } from '@maikr/enums'

import { BrowserStorage } from "./storage/browser";

export class Project implements ProjectInterface {

    private _storage: Storage<ProjectInterface> | null = null;
    private _globalId: GlobalId = null;
    private _localId: LocalId = null;
    private _name: string = '';
    /** TODO: FIX REFERENCES! */
    private _phase: Phase = 'idea' as Phase; // Phase.Idea;
    private _type: Type = 'software' as Type; // Type.Software;

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

    get local_id(): LocalId | null {
        return this._localId || null;
    }
    set local_id(id: LocalId) {
        this._localId = id;
    }
    
    get global_id(): GlobalId | null {
        return this._globalId;
    }
    set global_id(id: GlobalId) {
        this._globalId = id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    get phase(): Phase {
        return this._phase;
    }
    set phase(phase: Phase) {
        this._phase = phase;
    }

    get type(): Type {
        return Type.Software;
    }
    set type(type: Type) {
        this._type = type;
    }

    save(): Promise<ProjectInterface> {
        if(this._localId) {
            return this._storage?.update(this) || new Promise(_ => new Project());
        }
        return this._storage?.create(this) || new Promise(_ => new Project());
    }

    delete(): Promise<boolean> {
        return this._storage?.delete(this.local_id) || new Promise(_ => false);
    }
}