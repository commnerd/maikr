"use strict";
exports.__esModule = true;
exports.List = void 0;
var list_item_iterator_1 = require("./list-item-iterator");
var List = /** @class */ (function () {
    function List(listItems) {
        if (listItems == undefined) {
            listItems = [];
        }
        if (!Array.isArray(listItems)) {
            listItems = Array.from(listItems);
        }
        this.listItems = Array.from(listItems);
    }
    List.prototype.items = function () {
        return this.listItems;
    };
    List.prototype.add = function (i) {
        this.listItems.push(i);
    };
    List.prototype.remove = function (index) {
        this.listItems.splice(index, 1);
        return this;
    };
    List.prototype.length = function () {
        return this.listItems.length;
    };
    List.prototype.moveItems = function (i1, i2, alg) {
        return this;
    };
    List.prototype.update = function (index, value) {
        this.listItems[index].setShort(value);
    };
    List.prototype[Symbol.iterator] = function () {
        return new list_item_iterator_1.ListItemIterator(this.items());
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=list.js.map