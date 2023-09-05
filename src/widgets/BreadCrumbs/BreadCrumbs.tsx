import {Breadcrumbs, Link} from "@mui/material";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
const cx = cnBind.bind(styles)
interface IBreadCrumbs{
    listBread: string[]
}

export const BreadCrumbs = ({listBread}:IBreadCrumbs) => {
    return (
        <Breadcrumbs className={cx("bread")} aria-label="breadcrumb" separator="/">
            {
                listBread.map((el, i) => i === listBread.length - 1
                    ? <span className={cx("title-b")} key={i}>{el}</span>
                    : <Link className={cx("link-b")} key={i}>{el}</Link>)
            }
        </Breadcrumbs>
    );
};