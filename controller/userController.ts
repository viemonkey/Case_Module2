import {User} from "../model/User";

export class UserController {
    private userList: User[] = [];

    constructor() {
        this.userList.push(new User('viet123', '123', 0));
    }

    register(username: string, password: string) {
        this.userList.push(new User(username, password, 1));
    }

    login(username: string, password: string): number {
        let index = -1;
        this.userList.map((user) => {
            if (user.getUserAccount() === username && user.getUserPassword() === password) {
                index = user.getRole();
                return;
            }
        })
        return index;
    }
}