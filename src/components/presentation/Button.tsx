import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    (props, ref): React.ReactElement => {

    const {
        id,
        className,
        name,
        value,
        type,
        disabled,
        isSubmitting,
        handleClick
    } = props;

    return (
        <div className={styles.root}>
            <button
                className={className}
                id={id}
                name={name}
                type={type}
                disabled={isSubmitting || disabled}
                ref={ref}
                onClick={handleClick}
            >
                {value}
            </button>
        </div>
    );
});

type ButtonType = {
    readonly id: string;
    readonly className?: string;
    readonly name?: string;
    readonly value?: string;
    readonly type?: 'submit' | 'button' | 'reset';
    readonly disabled?: boolean;
    readonly isSubmitting?: boolean;
    readonly handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    className: undefined,
    name: undefined,
    value: '',
    type: 'submit',
    disabled: false,
    isSubmitting: false,
    handleClick: (): void => {},
}

export default Button;
