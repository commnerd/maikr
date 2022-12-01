"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DevelopmentRunContext = void 0;
var run_context_1 = require("@maikr/enums/run-context");
var run_context_2 = require("./run-context");
var DevelopmentRunContext = /** @class */ (function (_super) {
    __extends(DevelopmentRunContext, _super);
    function DevelopmentRunContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "Development";
        _this.slug = run_context_1.RunContext.DEV;
        return _this;
    }
    return DevelopmentRunContext;
}(run_context_2.RunContext));
exports.DevelopmentRunContext = DevelopmentRunContext;
//# sourceMappingURL=dev.js.map