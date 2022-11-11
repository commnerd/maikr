import { RunContext } from "../enums/run_context";

export class Settings {
    private settings: { [l: string]: string } = {};

    constructor(settings?: { [l: string]: string }) {
        this.settings = settings || {};

        this.settings['run_context'] = RunContext.LOCAL;
    }
}