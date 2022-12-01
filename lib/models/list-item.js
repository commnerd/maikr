"use strict";
exports.__esModule = true;
exports.ListItem = void 0;
var ListItem = /** @class */ (function () {
    function ListItem() {
        this.indexVal = 0;
        this.shortVal = '';
        this.longVal = '';
    }
    ListItem.prototype.index = function () {
        return this.indexVal;
    };
    ListItem.prototype.setIndex = function (index) {
        this.indexVal = index;
    };
    ListItem.prototype.short = function () {
        return this.shortVal;
    };
    ListItem.prototype.setShort = function (value) {
        this.shortVal = value;
    };
    ListItem.prototype.long = function () {
        return this.longVal;
    };
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=list-item.js.map