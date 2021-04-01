import React from 'react';
import styled from 'styled-components';

//required syntax for styled component to work with typescript and props
const WrapperComponent: React.FunctionComponent<WrapperComponentProps> = 
({ className, children }) => (
    <div className={className}>{children}</div>
);

interface WrapperComponentProps {
    readonly className?: string;
    readonly background?: string;
    readonly color?: string;
};

const Wrapper = styled(WrapperComponent)`
    padding: 0;
    margin: 0;
    width: 100%;

    //resets begin
    button {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
        *vertical-align: middle;
        line-height: normal;
        text-transform: none;
        -webkit-appearance: button;
        cursor: pointer;
        *overflow: visible;
        color: #222;
    }

    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    //resets end

    button {
        color: ${props => props.color};
        background: ${props => props.background};
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        height: auto;
        padding: .7rem;
        border: none;
        border-radius: 5px;

        &:hover, &:focus {
            color: ${props => props.color};
            background: white;
        }

        &[disabled] {
            cursor: default;
            color: gray;
        }
    }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref): React.ReactElement => {

        const {
            id,
            className,
            name,
            children,
            type,
            disabled,
            isSubmitting,
            onClick,
            background,
            color,
            ...restProps
        } = props;

        return (
            <Wrapper background={background} color={color}> 
                <button
                    className={className}
                    id={id}
                    name={name}
                    type={type}
                    disabled={disabled}
                    ref={ref}
                    onClick={(event) => onClick && onClick(event)}
                    {...restProps}
                >
                    {children}
                </button>
            </Wrapper>
        );
    });

type ButtonProps = {
    readonly id?: string;
    readonly className?: string;
    readonly name?: string;
    readonly children?: any;
    readonly type?: 'submit' | 'button' | 'reset';
    readonly disabled?: boolean;
    readonly isSubmitting?: boolean;
    readonly background?: string;
    readonly color?: string;
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    id: undefined,
    className: undefined,
    name: undefined,
    type: 'submit',
    disabled: false,
    isSubmitting: false,
    background: 'none',
    color: '#222',
    onClick: () => {}
}

export default Button;
