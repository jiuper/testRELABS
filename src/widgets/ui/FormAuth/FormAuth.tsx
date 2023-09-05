import cnBind from "classnames/bind"
import styles from "./style.module.scss"
import {Button, Input} from "@mui/material";
import {useForm} from "../../hooks/useLogin";
import type {IInputFormDate} from "../../types/Form.type";
import {useBooleanState} from "../../../shared/lib/hooks/useBooleanState";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../shared/const/Routing";
import {Loader} from "../../../shared/ui/Loader/Loader";

const cx = cnBind.bind(styles)

export const FormAuth = () => {
    const href = useNavigate()
    const {user, handleOnBlur, handleChange, isValid} = useForm()
    const {value, setTrue, setFalse} = useBooleanState(false)
    const FORM_DATA: IInputFormDate[] = [
        {
            onChange: (e) => handleChange(e.target.value, "email"),
            value: user.email.value,
            error: user.email.error,
            required: true,
            placeholder: "Email",
            onBlur: () => handleOnBlur(true, "email"),
            isDirty: user.email.isDirty
        },
        {
            onChange: (e) => handleChange(e.target.value, "password"),
            value: user.password.value,
            error: user.password.error,
            required: true,
            placeholder: "Password",
            onBlur: () => handleOnBlur(true, "password"),
            type: "password",
            isDirty: user.password.isDirty
        }
    ]
    const onSubmitForm = () => {
        setTrue()
        setTimeout(() => {
            href(ROUTES.Home)
            setFalse()
        }, 2000)
    }

    return (
        <>
            <div className={cx("form__auth")}>
                <h3 className={cx("form__auth-heading")}>Авторизация</h3>
                <div className={cx("form__auth-inputs")}>
                    {
                        FORM_DATA.map((userDate, i) =>
                            <div key={i} className={cx("form__auth-input")}>
                                <span className={cx(userDate.error && "error")}>{userDate.error}</span>
                                <Input
                                    value={userDate.value}
                                    onChange={userDate.onChange}
                                    className={cx("item")}
                                    error={userDate.error !== "" && userDate.error !== null}
                                    placeholder={userDate.placeholder}
                                    onBlur={userDate.onBlur}
                                    required={userDate.required}
                                    type={userDate.type}
                                />
                            </div>
                        )
                    }
                </div>
                <div className={cx("form__auth-btn")}>
                    <Button
                        onClick={onSubmitForm}
                        className={cx("btn")}
                        disabled={!isValid}
                    >
                        Авторизироваться
                    </Button>
                </div>
            </div>
            {
                value && <Loader/>
            }
        </>
    );
};