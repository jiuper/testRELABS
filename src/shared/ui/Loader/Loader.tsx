import {CircularProgress} from "@mui/material";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
const cx = cnBind.bind(styles)

export const Loader = () => {
    return (
        <div className={cx("loader")}>
            <div className={cx("backdrop")}>
                <div className={cx("container")}>
                    <CircularProgress/>
                </div>
            </div>
        </div>
    );
};