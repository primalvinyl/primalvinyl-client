import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/partials/_variables.module.scss';

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;

    button {
        color: ${styles.gray100};
        background: ${styles.gray700};
        font-size: .9em;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        padding: .7em;
        border: none;
        border-radius: 5px;

        &[disabled] {
            color: ${styles.gray300};
            background: ${styles.gray500};
        }
    }
`;

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
        url,
        onClick
    } = props;

    return (
        <Wrapper>
            <button
                className={className}
                id={id} 
                name={name}
                type={type}
                disabled={isSubmitting || disabled}
                ref={ref}
                onClick={(event) => {
                    url && window.open(url, 'article', 'noopener,noreferrer');
                    onClick && onClick(event);
                }}
            >
                {value}
            </button>
        </Wrapper>
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
    readonly url?: string;
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    className: undefined,
    name: undefined,
    value: '',
    type: 'submit',
    disabled: false,
    isSubmitting: false,
    url: undefined,
    onClick: (): void => {}
}

export default Button;
