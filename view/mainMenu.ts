import {Computer} from "../model/Computer";
import {Manage} from "../manage/manage";

let input = require("readline-sync");

export class MainMenu {
    manage = new Manage();

    mainMenu() {
        let mainMenu = `
    1. Computer Display
    2. Computer Add
    3. Computer Edit
    4. Computer Delete
    5. Computer Search
    6. Total Money
    0. Exit
    `
        let choice = -1;

        do {
            console.log(mainMenu);
            do {
                choice = +input.question("Enter Choice: ");
                if (choice < 0 || choice > 6) {
                    console.log("Vui lòng chọn từ 1 đến 6!");
                    continue;
                }
                break;
            }
            while (true)


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
        } while (choice !== 0)
    }

    computerAdd() {
        let computerId = +input.question("Enter Computer Id: ");
        let computerStatus = input.question("Enter Computer Status: ");
        let computerTimeUsed = +input.question("Enter Computer Usage Time: ");
        let storage = new Computer(computerId, computerStatus, computerTimeUsed);
        this.manage.add(storage)
    }

    computerDisplay() {
        console.table(this.manage.display())
    }

    computerEdit() {
        let idEdit = +input.question("Input Id To Edit: ");
        let computerId = +input.question("Enter Computer Id: ");
        let computerStatus = input.question("Enter Computer Status: ");
        let computerTimeUsed = +input.question("Enter Computer Usage Time: ");
        let storage = new Computer(computerId, computerStatus, computerTimeUsed)
        this.manage.edit(idEdit, storage)
    }

    computerDelete() {
        let idDelete = +input.question("Enter The Id You Want To Delete: ");
        console.log(this.manage.delete(idDelete))
    }

    computerSearch() {
        let computerDetail = +input.question("Enter The Id You Want To Find: ")
        this.manage.detail(computerDetail)
    }

    totalComputerMoney() {
        console.table(this.manage.totalMoney())
    }

}