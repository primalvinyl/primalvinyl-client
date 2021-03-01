import React from 'react';
import styled from 'styled-components';

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
        color: #ed2024;
        font-size: .9em;
    }

    input {
        width: 100%;
        padding: .5em;
        border: 1px solid #adb5bd;
        border-radius: 5px;
        color: #212529;
        background: white;
        box-sizing: border-box;

        &:focus {
            border-color: #adb5bd;
            background: white;
        }

        &[disabled] {
            color: #6c757d;
            background: #dee2e6;
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
            <div className="formControlWrapper">
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
                    <div className="formFieldError">
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
