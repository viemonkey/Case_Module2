import {Computer} from "../model/Computer";

export interface IManage {
    add(t: Computer): void;

    edit(id: number, t: Computer);

    delete(id: number): Computer;

    findById(id: number): number;

    display(): Computer[];
}
