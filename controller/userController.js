"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var User_1 = require("../model/User");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userList = [];
        this.userList.push(new User_1.User('viet123', '123', 0));
    }
    UserController.prototype.register = function (username, password) {
        this.userList.push(new User_1.User(username, password, 1));
    };
    UserController.prototype.login = function (username, password) {
        var index = -1;
        this.userList.map(function (user) {
            if (user.getUserAccount() === username && user.getUserPassword() === password) {
                index = user.getRole();
                return;
            }
        });
        return index;
    };
    return UserController;
}());
exports.UserController = UserController;
