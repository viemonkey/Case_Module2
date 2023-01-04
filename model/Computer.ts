export class Computer {
    private _id: number;
    private _computerStatus: string;
    private _timeUsed: number;
    private _totalMoney: number;


    constructor(id: number, computerStatus: string, timeUsed: number) {
        this._id = id;
        this._computerStatus = computerStatus;
        this._timeUsed = timeUsed;
        this._totalMoney = timeUsed * 10000
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getComputerStatus(): string {
        return this._computerStatus;
    }

    setComputerStatus(value: string) {
        this._computerStatus = value;
    }

    getTimeUsed(): number {
        return this._timeUsed;
    }

    setTimeUsed(value: number) {
        this._timeUsed = value;
    }


    getTotalMoney(): number {
        return this._totalMoney;
    }

    setTotalMoney(value: number) {
        this._totalMoney = value;
    }
}