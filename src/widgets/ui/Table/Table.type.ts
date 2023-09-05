import type {UserItem} from "../../../entities/User/type/user.type";

export interface ITable {
    listHead: string[];
    tableUser: UserItem[];
    isLoading: boolean;
    btn?: boolean;
    handleFilter: (id?: number) => void
    width: number;
}