"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var mainMenu_1 = require("./mainMenu");
var userController_1 = require("../controller/userController");
var input = require("readline-sync");
var Menu = /** @class */ (function () {
    function Menu() {
        this.user = new mainMenu_1.MainMenu();
        this.userManager = new userController_1.UserController();
        this.menu = "\n    1. Login\n    2. Register\n    3. Exit";
    }
    Menu.prototype.init = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +input.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    var username = input.question("Username: ");
                    var password = input.question("Password: ");
                    var status_1 = this.userManager.login(username, password);
                    if (status_1 == -1) {
                        console.log("Wrong username or password");
                    }
                    else {
                        this.user.mainMenu();
                    }
                    break;
                }
                case 2: {
                    var username = input.question("UserName: ");
                    var password = input.question("Password: ");
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    return Menu;
}());
exports.Menu = Menu;
