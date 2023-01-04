"use strict";
exports.__esModule = true;
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer(id, computerStatus, timeUsed) {
        this._id = id;
        this._computerStatus = computerStatus;
        this._timeUsed = timeUsed;
        this._totalMoney = timeUsed * 10000;
    }
    Computer.prototype.getId = function () {
        return this._id;
    };
    Computer.prototype.setId = function (value) {
        this._id = value;
    };
    Computer.prototype.getComputerStatus = function () {
        return this._computerStatus;
    };
    Computer.prototype.setComputerStatus = function (value) {
        this._computerStatus = value;
    };
    Computer.prototype.getTimeUsed = function () {
        return this._timeUsed;
    };
    Computer.prototype.setTimeUsed = function (value) {
        this._timeUsed = value;
    };
    Computer.prototype.getTotalMoney = function () {
        return this._totalMoney;
    };
    Computer.prototype.setTotalMoney = function (value) {
        this._totalMoney = value;
    };
    return Computer;
}());
exports.Computer = Computer;
