export type UniversalFormState<T> = {
    [key in keyof T]: {
        value: T[key];
        error: string | null;
        isDirty: boolean;
    };
};

export interface ILoginValue {
    email: string;
    password: string
}
export interface IInputFormDate {
    value: string;
    error: string | null;
    placeholder: string;
    onBlur: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    type?: string;
    isDirty: boolean;
}