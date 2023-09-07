import {Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../shared/const/Routing";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
import {useState} from "react";

const cx = cnBind.bind(styles)
export const Header = () => {
    const href = useNavigate()
    const [value, setValue] = useState("0");

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };
    return (
        <Tabs value={value} onChange={() => handleChange} className={cx("points")}>
            <Tab className={cx("point")} value="0" label="Главная" onClick={() => href(ROUTES.Home)}/>
            <Tab className={cx("point")} value="1" label="Авторизация" onClick={() => href(ROUTES.Login)}/>
            <Tab className={cx("point")} value="2" label="Магазин" onClick={() => href(ROUTES.Marketplace)}/>
        </Tabs>
    );
};