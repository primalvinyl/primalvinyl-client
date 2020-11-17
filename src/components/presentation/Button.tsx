import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    (props, ref): React.ReactElement => {

    const {
        id,
        value,
        type,
        disabled,
        handleClick
    } = props;

    return (
        <div className={styles.root}>
            <button
                className={styles.formControl}
                id={id}
                type={type}
                disabled={disabled}
                ref={ref}
                onClick={handleClick}
            >
                {value}
            </button>
        </div>
    );
});

type ButtonType = {
    readonly id?: string;
    readonly value?: string;
    readonly type?: 'submit' | 'button' | 'reset';
    readonly disabled?: boolean;
    readonly handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    id: undefined,
    value: '',
    type: 'submit',
    disabled: false,
    handleClick: (): void => {},
}

export default Button;
