import React from 'react';
import styled from 'styled-components';

//required syntax for styled component to work with typescript
const WrapperComponent: React.FunctionComponent<WrapperComponentProps> = 
({ className, children }) => (
    <div className={className}>{children}</div>
);
interface WrapperComponentProps {
    readonly className?: string;
    readonly background?: string;
    readonly foreground?: string;
};
const Wrapper = styled(WrapperComponent)`
    padding: 0;
    margin: 0;
    width: 100%;

    //resets begin
    button {
        font-size: 100%; /* 1 */
        margin: 0; /* 2 */
        vertical-align: baseline; /* 3 */
        *vertical-align: middle; /* 3 */
        line-height: normal;
        text-transform: none;
        -webkit-appearance: button; /* 2 */
        cursor: pointer; /* 3 */
        *overflow: visible;  /* 4 */
        color: #222;
    }

    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    //resets end

    button {
        color: ${props => props.foreground};
        background: ${props => props.background};
        font-size: .9em;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        padding: .7em;
        border: none;
        border-radius: 5px;

        &[disabled] {
            color: #dee2e6;
            background: #adb5bd;
            cursor: default;
        }
    }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
            onClick,
            background,
            foreground
        } = props;

        return (
            <Wrapper background={background} foreground={foreground}> 
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

type ButtonProps = {
    readonly id: string;
    readonly className?: string;
    readonly name?: string;
    readonly value?: string;
    readonly type?: 'submit' | 'button' | 'reset';
    readonly disabled?: boolean;
    readonly isSubmitting?: boolean;
    readonly url?: string;
    readonly background?: string;
    readonly foreground?: string;
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
    background: '#495057',
    foreground: '#f8f9fa',
    onClick: () => {}
}

export default Button;
