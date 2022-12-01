// import { RunContext } from '@maikr/enums/run-context';

export class Settings {
    private settings: { [l: string]: string } = {};

    constructor(settings?: { [l: string]: string }) {
        this.settings = settings || {};

        this.settings['run-context'] = "local"; // RunContext.LOCAL;
    }
}