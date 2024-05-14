"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrl = void 0;
/**
 * create URL by filters
 * @param filters type object
 * @returns url
 */
var createUrl = function (filters) {
    if (filters === null) {
        return '';
    }
    var url = "";
    Object.keys(filters).map(function (property, index) {
        var simbol = url === "" ? '?' : '&';
        var value = Object.values(filters)[index];
        url += value !== "" ? "".concat(simbol).concat(property, "=").concat(value) : '';
    });
    return url;
};
exports.createUrl = createUrl;
