import React from 'react';
import styles from './Select.module.scss';

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    (props, ref): React.ReactElement => {

    const {
        label,
        id,
        name,
        className,
        value,
        options,
        errors,
        touched,
        required,
        disabled,
        handleChange,
        handleBlur
    } = props;

    return (
        <div className={styles.root}>
            {label && (<label htmlFor={id} className={styles.formLabel}>{label}</label>)}
            <div className={styles.formControlWrapper}>
                <select
                    className={className}
                    name={name}
                    id={id}
                    value={value}
                    ref={ref}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={required}
                    disabled={disabled}
                >
                    {() => options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.display}
                        </option>
                    ))}
                </select>
                {(errors && touched) && (errors[id] && touched[id]) && (
                    <div className={styles.formFieldError}>
                        {errors[id]}
                    </div>
                )}
            </div>
        </div>
    );
});

type SelectType = {
    readonly id: string;
    readonly value: string;
    readonly options: {value: string; display: string}[];
    readonly className?: string;
    readonly name?: string;
    readonly label?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

Select.defaultProps = {
    className: undefined,
    name: undefined,
    label: undefined,
    required: false,
    disabled: false,
    errors: {},
    touched: {},
    handleChange: (): void => {},
    handleBlur: (): void => {},
}

export default Select;
