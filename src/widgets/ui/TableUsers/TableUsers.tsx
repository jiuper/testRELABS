import {Pagination} from "@mui/material";
import {useGetUsersQuery} from "../../../entities/User/api/fetchAllUser";
import {useEffect, useState} from "react";

import type {UserItem} from "../../../entities/User/type/user.type";
import {listCellUsers} from "../../const/var";
import {usePagination} from "../../hooks/usePagination";
import {TableCont} from "../Table/Table";

export const TableUsers = () => {

    const {handleChangePage, pages, handleChangeCount, count, page} = usePagination()
    const {data, isLoading} = useGetUsersQuery(pages)
    const [userDate, setUserDate] = useState<UserItem[]>([])


    const handleFilter = (id?: number) => {
        setUserDate(userDate.filter(el => el.id !== id))
    }

    useEffect(() => {
        if (data) {
            setUserDate(data.items)
            handleChangeCount(data.total, data.limit)
        }
    }, [data])

    return (
        <>
            <TableCont
                width={1000}
                listHead={listCellUsers}
                tableUser={userDate}
                isLoading={isLoading}
                handleFilter={handleFilter}
            />

            <Pagination
                page={page}
                count={count}
                onChange={(_, page) => handleChangePage(page)}/>
        </>
    );
};
