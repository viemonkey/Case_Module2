"use strict";
exports.__esModule = true;
exports.Manage = void 0;
var Manage = /** @class */ (function () {
    function Manage() {
        this.listComputer = [];
    }
    Manage.prototype.add = function (t) {
        this.listComputer.push(t);
    };
    Manage.prototype["delete"] = function (id) {
        var index = this.findById(+id);
        console.log(index);
        if (index === -1) {
            console.log("--------Don't Have This Id--------");
        }
        else {
            this.listComputer.splice(index, 1);
            console.log("--------Delete Successfully--------");
        }
        return;
    };
    Manage.prototype.display = function () {
        return this.listComputer;
    };
    Manage.prototype.edit = function (id, t) {
        var index = this.findById(id);
        if (index === -1) {
            console.log("--------Don't Have This Id--------");
        }
        else {
            this.listComputer[index] = t;
            console.log("--------Successful Fix--------");
        }
    };
    Manage.prototype.findById = function (id) {
        for (var i = 0; i < this.listComputer.length; i++) {
            if (id === this.listComputer[i].getId()) {
                return i;
            }
        }
        return -1;
    };
    Manage.prototype.detail = function (id) {
        var index = this.findById(id);
        var machine = this.listComputer[index];
        console.log(machine);
    };
    Manage.prototype.totalMoney = function () {
        var sum = 0;
        for (var i = 0; i < this.listComputer.length; i++) {
            sum += this.listComputer[i].getTotalMoney();
        }
        console.log("--------your total amount is--------");
        return sum;
    };
    return Manage;
}());
exports.Manage = Manage;
