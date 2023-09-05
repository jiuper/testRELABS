import {useEffect, useState} from "react";
import type {ILoginValue, UniversalFormState} from "../types/Form.type";

const regExp = /^\S+@\S+\.\S+$/
const regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
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
            !regExp.test(value.trim()) &&
            value.trim().length > 0:
                return "Некорректный Email";
            case type === "password" &&
            !regPass.test(value.trim()) &&
            value.trim().length > 0:
                return "Некорректный Пароль";
            case
            type !== "email" &&
            type !== "password" &&
            value.trim().length === 0:
                return "Поле не заполнено";
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