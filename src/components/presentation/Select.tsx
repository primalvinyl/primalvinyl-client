import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/partials/_variables.module.scss';

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;

    label {
        display: inline-block;
        margin-bottom: .3em;
    }

    .formFieldError {
        margin-top: .2em;
        color: ${styles.error};
        font-size: .9em;
    }

    select {
        width: 100%;
        padding: .5em;
        border: 1px solid ${styles.gray500};
        border-radius: 5px;
        color: ${styles.gray900};
        background: ${styles.gray100};
        box-sizing: border-box;

        &:focus {
            border-color: ${styles.gray500};
            background: ${styles.white};
        }

        &[disabled] {
            color: ${styles.gray600};
            background: ${styles.gray300};
        }
    }
`;

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    (props, ref): React.ReactElement => {

    const {
        label,
        id,
        name,
        className,
        value,
        defaultValue,
        options,
        errors,
        touched,
        required,
        disabled,
        onChange,
        onBlur,
        handleChange,
        handleBlur
    } = props;

    return (
        <Wrapper>
            {label && (<label htmlFor={id} className={styles.formLabel}>{label}</label>)}
            <div className={styles.formControlWrapper}>
                <select
                    className={className}
                    name={name}
                    id={id}
                    value={value}
                    defaultValue={defaultValue}
                    ref={ref}
                    onChange={event => {
                        handleChange && handleChange(event);
                        onChange && onChange(event);
                    }}
                    onBlur={event => {
                        handleBlur && handleBlur(event);
                        onBlur && onBlur(event);
                    }}
                    required={required} 
                    disabled={disabled}
                >
                    {options.map(option => (
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
        </Wrapper>
    );
});

type SelectType = {
    readonly id: string;
    readonly options: {value: string; display: string}[];
    readonly value?: string;
    readonly defaultValue?: string;
    readonly className?: string;
    readonly name?: string;
    readonly label?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
};

Select.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    className: undefined,
    name: undefined,
    label: undefined,
    required: false,
    disabled: false,
    errors: {},
    touched: {},
    onChange: (): void => {},
    onBlur: (): void => {},
    handleChange: (): void => {},
    handleBlur: (): void => {}
}

export default Select;
