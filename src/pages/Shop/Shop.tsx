import cnBind from "classnames/bind";
import styles from "./style.module.scss";
import {CardItem} from "../../widgets/ui/CardItem/CardItem";
import imgPhones from "../../shared/assets/images/d5c21d1129f1c6982ac63fc9db097930.jpeg"
import {breadCrumbs, listIcons} from "../../widgets/const/var";
import SvgPath from "../../shared/assets/icons/sprite.svg"
import {Link} from "react-router-dom";

const cx = cnBind.bind(styles)

export const Shop = () => {
    const listPhone = Array(4).fill("")
    return (
        <div className={cx("m-page")}>
            <div className={cx("link-btn")}>
                <Link className={cx("link-home")} to="/">Назад</Link>
            </div>


            <div className={cx("content")}>
                {
                    listPhone.map((_, i) =>
                        <CardItem
                            key={i}
                            countSale={14}
                            imgPhone={imgPhones}
                            price={99990}
                            listIcons={listIcons}
                            breadCrumbs={breadCrumbs}
                            SvgPath={SvgPath}
                        />)
                }

            </div>
        </div>
    );
};