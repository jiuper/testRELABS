import {Header} from "../../widgets/ui/Header/Header";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
import {TableUsers} from "../../widgets/ui/TableUsers/TableUsers";
import {TableEvent} from "../../widgets/ui/TableEvent/TableEvent";

const cx = cnBind.bind(styles)
export const Home = () => {

    return (
        <div className={cx("m-page")}>
            <div className={cx("header")}>
                <Header/>
            </div>
            <div className={cx("content")}>
                <div className={cx("c-left")}>
                    <h3>Список пользователей</h3>
                    <TableUsers/>
                </div>
                <div className={cx("c-right")}>
                    <h3>События</h3>
                    <TableEvent/>
                </div>
            </div>
        </div>
    );
};