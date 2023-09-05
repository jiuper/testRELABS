import cnBind from "classnames/bind";
import styles from "./style.module.scss"
import {Button, Rating} from "@mui/material";
import {useMemo} from "react";
import {BreadCrumbs} from "../../BreadCrumbs/BreadCrumbs";
import {SvgIcon} from "../../../shared/ui/SvgIcon/SvgIcon";

import type {ICardItem} from "./CardItem.type";

const cx = cnBind.bind(styles)


export const CardItem = ({imgPhone, countSale, price, breadCrumbs, listIcons, SvgPath}: ICardItem) => {
    const salePrice: number = useMemo(() => price - (price / 100 * countSale), [countSale, price])

    return (
        <div className={cx("card")}>
            <div className={cx("card-h")}>
                <img className={cx("c-img")} src={imgPhone} alt="imgPhone"/>
                <div className={cx("c-sale")}>-{countSale}%</div>
            </div>
            <div className={cx("card-b")}>
                <div className={cx("b-price")}>
                    <div className={cx("b-sale")}>{Math.floor(salePrice)} ₽</div>
                    <div className={cx("b-nosale")}>{price} ₽</div>
                </div>
                <div className={cx("b-icons")}>
                    <div className={cx("i-title")}>{Math.floor(salePrice - 700)} ₽</div>
                    <div className={cx("i-icon")}>
                        {
                            listIcons.map(el => <SvgIcon key={el} name={el} svgPath={SvgPath}/>)
                        }
                    </div>
                </div>
                <div className={cx("b-breadcrumbs")}>
                    <BreadCrumbs listBread={breadCrumbs}/>
                </div>
                <div className={cx("b-rating")}>
                    <Rating className={cx("r-btn")} name="half-rating" defaultValue={5} precision={0.5}/>
                    <span>87</span>
                </div>
                <div className={cx("b-credit")}>рассрочка 0-0-6</div>
                <div className={cx("b-btn")}>
                    <Button className={cx("btn-buy")}>В корзину</Button>
                    <SvgIcon classPrefix={cx("icon-like")} svgPath={SvgPath} name="like"/>
                </div>

            </div>
        </div>
    );
};