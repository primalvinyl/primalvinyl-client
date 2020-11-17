import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef<HTMLInputElement, InputType>(
    (props, ref) => {
    
    const {
        label,
        placeholder,
        type,
        id,
        name,
        value,
        required,
        disabled,
        errors, 
        touched,
        handleChange,
        handleBlur
    } = props;

    return (
        <div className={styles.root}>
            {(label) && (<label htmlFor={id}>
                {label}
            </label>)}
            <div className={styles.formControlWrapper}>
                <input
                    type={type}
                    className={styles.formControl}
                    id={id}
                    name={name}
                    value={value}
                    ref={ref}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {(errors && touched && id) && (errors[id] && touched[id]) && (
                    <div className={styles.formFieldError}>
                        {errors[id]}
                    </div>
                )}
            </div>
        </div>
    );
});

type InputType = {
    readonly id?: string;
    readonly name?: string;
    readonly label?: string;
    readonly placeholder?: string;
    readonly type?: string;
    readonly value?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

Input.defaultProps = {
    id: undefined,
    name: undefined,
    label: undefined,
    placeholder: undefined,
    type: 'text',
    value: '',
    required: false,
    disabled: false,
    errors: {},
    touched: {},
    handleChange: (): void => {},
    handleBlur: (): void => {}
}

export default Input;
