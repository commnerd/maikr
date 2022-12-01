"use strict";
// import { RunContext } from '@maikr/enums/run-context';
exports.__esModule = true;
exports.Settings = void 0;
var Settings = /** @class */ (function () {
    function Settings(settings) {
        this.settings = {};
        this.settings = settings || {};
        this.settings['run-context'] = "local"; // RunContext.LOCAL;
    }
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map