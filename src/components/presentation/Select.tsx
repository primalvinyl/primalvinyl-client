import React from 'react';
import styles from './Select.module.scss';

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    (props, ref): React.ReactElement => {

    const {
        label,
        id,
        value,
        values,
        errors,
        touched,
        required,
        handleChange,
        handleBlur
    } = props;

    let elements: any = [];
    if (values) {
        elements = values.map(element => {
            return (
                <option
                    key={element.value}
                    value={element.value}
                >
                    {element.displayValue}
                </option>
            );
        });
    }

    return (
        <div className={styles.root}>
            {label && (<label htmlFor={id} className={styles.formLabel}>{label}</label>)}
            <select
                className={styles.formControl}
                name={id}
                id={id}
                value={value}
                ref={ref}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
            >
                {elements}
            </select>
            {(errors && touched && id) && (errors[id] && touched[id]) && (
                <div className={styles.formFieldError}>
                    {errors[id]}
                </div>
            )}
        </div>
    );
});

type SelectType = {
    readonly id?: string;
    readonly values?: {value: string; displayValue: string}[];
    readonly label?: string;
    readonly value?: string;
    readonly required?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

Select.defaultProps = {
    id: undefined,
    label: undefined,
    value: '',
    values: [],
    required: false,
    errors: {},
    touched: {},
    handleChange: (): void => {},
    handleBlur: (): void => {},
}

export default Select;
