import {MainMenu} from "./mainMenu";
import {UserController} from "../controller/userController";

let input = require("readline-sync")

export class Menu {
    private user: MainMenu = new MainMenu();
    private userManager: UserController = new UserController();
    private menu: string = `
    1. Login
    2. Register
    3. Exit`

    public init(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +input.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    let username = input.question("Username: ");
                    let password = input.question("Password: ");
                    let status = this.userManager.login(username, password);
                    if (status == -1) {
                        console.log("Wrong username or password");
                    } else {
                        this.user.mainMenu();
                    }
                    break;
                }
                case 2: {
                    let username = input.question("UserName: ");
                    let password = input.question("Password: ");
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    }
}