import {IManage} from "../interface/IManage";
import {Computer} from "../model/Computer";

export class Manage implements IManage {
    listComputer: Computer[] = [];

    add(t: Computer): void {
        this.listComputer.push(t)
    }

    delete(id: number): Computer {
        let index = this.findById(+id);
        console.log(index)
        if (index === -1) {
            console.log("--------Don't Have This Id--------");
        } else {
            this.listComputer.splice(index, 1)
            console.log("--------Delete Successfully--------");
        }
        return;
    }

    display(): Computer[] {
        return this.listComputer;
    }

    edit(id: number, t: Computer) {
        let index = this.findById(id);
        if (index === -1) {
            console.log("--------Don't Have This Id--------");
        } else {
            this.listComputer[index] = t
            console.log("--------Successful Fix--------");

        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listComputer.length; i++) {
            if (id === this.listComputer[i].getId()) {
                return i;
            }
        }
        return -1;
    }

    detail(id: number) {
        let index = this.findById(id);
        let machine = this.listComputer[index];
        console.log(machine)
    }

    totalMoney() {
        let sum = 0;
        for (let i = 0; i < this.listComputer.length; i++) {
            sum += this.listComputer[i].getTotalMoney()
        }
        console.log("--------your total amount is--------")
        return sum;
    }
}