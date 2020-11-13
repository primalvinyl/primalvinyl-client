import React from 'react';

const Input = ({
    label,
    type,
    id,
    value,
    required,
    errors,
    touched,
    handleChange,
    handleBlur
}: InputType): React.ReactElement => {
    return (
        <div className="form-group">
            {label && (<label htmlFor={id}>{label}</label>)}
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {
                errors[id] && touched[id] && (
                    <div className="form-field-error">{errors[id]}
                    </div>
                )
            }
        </div>
    );
}
type MyObjectType = {
    dingo: string;
    bling: string;
};
const myString: keyof MyObjectType = 'bling';
console.log(myString);

type InputType = {
    readonly id: string;
    readonly handleChange: (event: React.ChangeEvent) => void;
    readonly handleBlur: (event: React.FocusEvent) => void;
    readonly label: string;
    readonly type: string;
    readonly value: string;
    readonly required: boolean;
    readonly errors: { [key: string]: string };
    readonly touched: { [key: string]: string };
};

Input.defaultProps = {
    id: '',
    handleChange: (): void => {},
    handleBlur: (): void => {},
    label: '',
    type: 'text',
    value: '',
    required: false,
    errors: {},
    touched: {}
}

export default Input;
