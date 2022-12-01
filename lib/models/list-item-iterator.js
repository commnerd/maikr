"use strict";
exports.__esModule = true;
exports.ListItemIterator = void 0;
var ListItemIterator = /** @class */ (function () {
    function ListItemIterator(items) {
        this.index = 0;
        this.array = [];
        this.array = Array.from(items);
    }
    ListItemIterator.prototype.next = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return {
            done: this.index >= this.array.length,
            value: this.array[this.index++]
        };
    };
    return ListItemIterator;
}());
exports.ListItemIterator = ListItemIterator;
//# sourceMappingURL=list-item-iterator.js.map