import React from 'react';

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    (props, ref): React.ReactElement => {
    const {
        id,
        value,
        type,
        isSubmitting,
        handleClick
    } = props;

    return (
        <div className="form-group">
            <button
                className="form-control"
                id={id}
                type={type}
                ref={ref}
                onClick={handleClick}
                disabled={isSubmitting}
            >
                {value}
            </button>
        </div>
    );
});

type ButtonType = {
    readonly id: string;
    readonly value: string;
    readonly type: 'submit' | 'button' | 'reset';
    readonly isSubmitting: boolean;
    readonly handleClick: (event: React.MouseEvent) => void;
};

Button.defaultProps = {
    id: '',
    value: '',
    type: 'submit',
    isSubmitting: false,
    handleClick: (): void => {},
}

export default Button;
