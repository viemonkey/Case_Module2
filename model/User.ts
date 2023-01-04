export class User {
    private _userAccount: string;
    private _userPassword: string;
    private _role: number;

    constructor(userAccount: string, userPassword: string, role: number) {
        this._userAccount = userAccount;
        this._userPassword = userPassword;
        this._role = role;
    }

    getUserAccount(): string {
        return this._userAccount;
    }

    setUserAccount(value: string) {
        this._userAccount = value;
    }

    getUserPassword(): string {
        return this._userPassword;
    }

    setUserPassword(value: string) {
        this._userPassword = value;
    }

    getRole(): number {
        return this._role;
    }

    setRole(value: number) {
        this._role = value;
    }
}