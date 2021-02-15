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

    input {
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

const Input = React.forwardRef<HTMLInputElement, InputType>(
    (props, ref) => {
    
    const {
        id,
        value,
        defaultValue,
        className,
        name,
        label,
        placeholder,
        type,
        required,
        disabled,
        errors, 
        touched,
        onChange,
        onBlur,
        handleChange,
        handleBlur
    } = props;

    return (
        <Wrapper>
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
                    defaultValue={defaultValue}
                    ref={ref}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    onChange={event => {
                        handleChange && handleChange(event);
                        onChange && onChange(event);
                    }}
                    onBlur={event => {
                        handleBlur && handleBlur(event);
                        onBlur && onBlur(event);
                    }}
                />
                {(errors && touched) && (errors[id] && touched[id]) && (
                    <div className={styles.formFieldError}>
                        {errors[id]}
                    </div>
                )}
            </div>
        </Wrapper>
    );
});

type InputType = {
    readonly id: string;
    readonly value?: string;
    readonly defaultValue?: string;
    readonly className?: string;
    readonly name?: string;
    readonly label?: string;
    readonly placeholder?: string;
    readonly type?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly errors?: { [key: string]: string };
    readonly touched?: { [key: string]: string };
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

Input.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    className: undefined,
    name: undefined,
    label: undefined,
    placeholder: undefined,
    type: 'text',
    required: false,
    disabled: false,
    errors: {},
    touched: {},
    onChange: (): void => {},
    onBlur: (): void => {},
    handleChange: (): void => {},
    handleBlur: (): void => {}
}

export default Input;
