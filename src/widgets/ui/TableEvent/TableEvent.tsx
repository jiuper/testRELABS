import {TableCont} from "../Table/Table";
import {listCellEvent} from "../../const/var";
import {useEffect} from "react";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
import useWebSocket from "react-use-websocket";
import {useHookDispatch, useHookSelector} from "../../../shared/lib/module/store/configStore";
import {AddEvent} from "../../../entities/User/module/store";

const cx = cnBind.bind(styles)

export const TableEvent = () => {
    const dispatch = useHookDispatch()
    const {lastMessage} = useWebSocket('wss://test.relabs.ru/event', {
        onOpen: () => console.log("connect"),
    });

    const socketDate = useHookSelector(state => state.userDataReducer.event)

    useEffect(() => {
        if (lastMessage)
            dispatch(AddEvent(JSON.parse(lastMessage.data)))
    }, [dispatch, lastMessage])

    return (
        <div className={cx("tb-event")}>
            <TableCont
                width={350}
                listHead={listCellEvent}
                tableUser={socketDate}
                isLoading={false}
                handleFilter={() => {
                }}
            />
        </div>
    );
};