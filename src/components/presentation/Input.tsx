import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef<HTMLInputElement, InputType>(
    (props, ref) => {
    
    const {
        id,
        value,
        className,
        name,
        label,
        placeholder,
        type,
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
                    className={className}
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
                {(errors && touched) && (errors[id] && touched[id]) && (
                    <div className={styles.formFieldError}>
                        {errors[id]}
                    </div>
                )}
            </div>
        </div>
    );
});

type InputType = {
    readonly id: string;
    readonly value: string;
    readonly className?: string;
    readonly name?: string;
    readonly label?: string;
    readonly placeholder?: string;
    readonly type?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

Input.defaultProps = {
    className: undefined,
    name: undefined,
    label: undefined,
    placeholder: undefined,
    type: 'text',
    required: false,
    disabled: false,
    errors: {},
    touched: {},
    handleChange: (): void => {},
    handleBlur: (): void => {}
}

export default Input;
