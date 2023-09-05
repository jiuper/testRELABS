import {TableCont} from "../Table/Table";
import {listCellEvent} from "../../const/var";
import {useHookSelector} from "../../../shared/lib/module/store/configStore";
import {useGetEventsQuery} from "../../../entities/User/api/fetchEvent";
import {useEffect, useState} from "react";
import type {UserItem} from "../../../entities/User/type/user.type";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
const cx = cnBind.bind(styles)

export const TableEvent = () => {
    const {} = useGetEventsQuery()
    const socketDate = useHookSelector(state => state.userDataReducer.event)
    const [userDate, setUserDate] = useState<UserItem[]>([])

    useEffect(() => {
        if (socketDate) {
            setUserDate([...userDate, socketDate])
        }
    }, [socketDate])
    return (
        <div className={cx("tb-event")}>
            <TableCont
                width={350}
                listHead={listCellEvent}
                tableUser={userDate}
                isLoading={false}
                handleFilter={() => {
                }}
            />
        </div>
    );
};