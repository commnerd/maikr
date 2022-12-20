// import { RunContext } from '@maikr/enums/run-context';
export class Settings {
    constructor(settings) {
        this.settings = {};
        this.settings = settings || {};
        this.settings['run-context'] = "local"; // RunContext.LOCAL;
    }
}
//# sourceMappingURL=settings.js.map