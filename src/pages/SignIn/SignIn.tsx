import {FormAuth} from "../../widgets/ui/FormAuth/FormAuth";
import cnBind from "classnames/bind";
import styles from "./style.module.scss"
const cx = cnBind.bind(styles)

export const SignIn = () => {

    return (
        <div className={cx("auth")}>
            <div className={cx("auth__media")}>
                <h2 className={cx("media__heading")}>
                    Get started
                    <small>Login to your account</small>
                </h2>
            </div>
            <FormAuth/>
        </div>
    );
};