import React from 'react';

const Input = React.forwardRef<HTMLInputElement, InputType>(
    (props, ref) => {
    
    const {
        label,
        type,
        id,
        value,
        required,
        errors,
        touched,
        handleChange,
        handleBlur
    } = props;

    return (
        <div className="form-group">
            {label && (<label htmlFor={id}>{label}</label>)}
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                ref={ref}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {(errors && touched && id) && (errors[id] && touched[id]) && (
                <div className="form-field-error">
                    {errors[id]}
                </div>
            )}
        </div>
    );
});

type InputType = {
    readonly id?: string;
    readonly label?: string;
    readonly type?: string;
    readonly value?: string;
    readonly required?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

Input.defaultProps = {
    id: '',
    label: '',
    type: 'text',
    value: '',
    required: false,
    errors: {},
    touched: {},
    handleChange: (): void => {},
    handleBlur: (): void => {}
}

export default Input;
