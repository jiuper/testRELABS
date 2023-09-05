export interface UserItem {
    id?: number,
    name?: string,
    role?: string,
    ctime?: number;
    event?:string
}

export interface IUserDate {
    total: number,
    per_page: number,
    page: number,
    limit: number,
    offset: number,
    items: UserItem[]
}