"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userAccount, userPassword, role) {
        this._userAccount = userAccount;
        this._userPassword = userPassword;
        this._role = role;
    }
    User.prototype.getUserAccount = function () {
        return this._userAccount;
    };
    User.prototype.setUserAccount = function (value) {
        this._userAccount = value;
    };
    User.prototype.getUserPassword = function () {
        return this._userPassword;
    };
    User.prototype.setUserPassword = function (value) {
        this._userPassword = value;
    };
    User.prototype.getRole = function () {
        return this._role;
    };
    User.prototype.setRole = function (value) {
        this._role = value;
    };
    return User;
}());
exports.User = User;
