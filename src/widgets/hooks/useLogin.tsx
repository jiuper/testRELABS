import {useEffect, useState} from "react";
import type {ILoginValue, UniversalFormState} from "../types/Form.type";

const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const regPass = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/
export const useForm = () => {

    const [user, setUser] = useState<UniversalFormState<ILoginValue>>({
        email: {value: "", error: "", isDirty: false},
        password: {value: "", error: "", isDirty: false}
    });

    const [isChanged, setIsChanged] = useState<boolean>(false);

    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = (value: string, type: keyof UniversalFormState<ILoginValue>) => {
        setIsChanged(true);
        setUser({...user, [type]: {...user[type], value: value}});
    };

    const handleOnBlur = (value: boolean, type: keyof UniversalFormState<ILoginValue>) => {
        setIsChanged(true);
        setUser({...user, [type]: {...user[type], isDirty: value}});
    };

    const isValidation = (
        value: string,
        type: keyof UniversalFormState<ILoginValue>
    ): string | null => {
        switch (true) {
            case type === "email" &&
            value.trim().length === 0:
                return "Поле не заполнено";
            case type === "password" &&
            value.trim().length === 0:
                return "Поле не заполнено";
            case type === "email" &&
            !regExp.test(value.trim()) &&
            value.trim().length > 0:
                return "Некорректный Email";
            case type === "password" &&
            value.trim().length < 8:
                return "Мин. длина 8 символов";
            case type === "password" &&
            !regPass.test(value.trim()) &&
            value.trim().length > 0:
                return "Некорректный пароль: 1 заглавная буква";
            default:
                return null;
        }
    };

    const isErrorValidator = (state: UniversalFormState<ILoginValue>) => {
        const result = {...state};
        let key: keyof UniversalFormState<ILoginValue>;
        for (key in state) {
            result[key].error = isValidation(state[key].value, key);
        }
        setUser(result);
    };

    useEffect(() => {
        if (isChanged) {
            isErrorValidator(user);
            setIsChanged(false);
            setIsValid(user.email.error === null && user.password.error === null && user.email.value !== "" && user.password.value !== "");
        }
    }, [user]);

    return {user, handleChange, handleOnBlur, isValid};
}