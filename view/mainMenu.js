"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var Computer_1 = require("../model/Computer");
var manage_1 = require("../manage/manage");
var input = require("readline-sync");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.manage = new manage_1.Manage();
    }
    MainMenu.prototype.mainMenu = function () {
        var mainMenu = "\n    1. Computer Display\n    2. Computer Add\n    3. Computer Edit\n    4. Computer Delete\n    5. Computer Search\n    6. Total Money\n    0. Exit\n    ";
        var choice = -1;
        do {
            console.log(mainMenu);
            do {
                choice = +input.question("Enter Choice: ");
                if (choice < 0 || choice > 6) {
                    console.log("Vui lòng chọn từ 1 đến 6!");
                    continue;
                }
                break;
            } while (true);
            switch (choice) {
                case 1:
                    this.computerDisplay();
                    break;
                case 2:
                    this.computerAdd();
                    break;
                case 3:
                    this.computerEdit();
                    break;
                case 4:
                    this.computerDelete();
                    break;
                case 5:
                    this.computerSearch();
                    break;
                case 6:
                    this.totalComputerMoney();
                    break;
                case 0:
                    break;
                default:
                    console.log("Please Choose Again: ");
                    break;
            }
        } while (choice !== 0);
    };
    MainMenu.prototype.computerAdd = function () {
        var computerId = +input.question("Enter Computer Id: ");
        var computerStatus = input.question("Enter Computer Status: ");
        var computerTimeUsed = +input.question("Enter Computer Usage Time: ");
        var storage = new Computer_1.Computer(computerId, computerStatus, computerTimeUsed);
        this.manage.add(storage);
    };
    MainMenu.prototype.computerDisplay = function () {
        console.table(this.manage.display());
    };
    MainMenu.prototype.computerEdit = function () {
        var idEdit = +input.question("Input Id To Edit: ");
        var computerId = +input.question("Enter Computer Id: ");
        var computerStatus = input.question("Enter Computer Status: ");
        var computerTimeUsed = +input.question("Enter Computer Usage Time: ");
        var storage = new Computer_1.Computer(computerId, computerStatus, computerTimeUsed);
        this.manage.edit(idEdit, storage);
    };
    MainMenu.prototype.computerDelete = function () {
        var idDelete = +input.question("Enter The Id You Want To Delete: ");
        console.log(this.manage["delete"](idDelete));
    };
    MainMenu.prototype.computerSearch = function () {
        var computerDetail = +input.question("Enter The Id You Want To Find: ");
        this.manage.detail(computerDetail);
    };
    MainMenu.prototype.totalComputerMoney = function () {
        console.table(this.manage.totalMoney());
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
