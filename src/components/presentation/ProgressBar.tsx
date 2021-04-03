import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;

    div.ldsEllipsis {
        position: relative;
        width: 80px;
        height: 10px;
        margin: 0 auto;

        div {
            position: absolute;
            top: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${props => props.color};
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }

        div:nth-child(1) {
            left: 8px;
            animation: ldsEllipsis1 0.6s infinite;
        }

        div:nth-child(2) {
            left: 8px;
            animation: ldsEllipsis2 0.6s infinite;
        }

        div:nth-child(3) {
            left: 32px;
            animation: ldsEllipsis2 0.6s infinite;
        }

        div:nth-child(4) {
            left: 56px;
            animation: ldsEllipsis3 0.6s infinite;
        }
    }

    @keyframes ldsEllipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes ldsEllipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes ldsEllipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }
`;

const ProgressBar = ({ color }: ProgressBarProps): React.ReactElement => {
    return (
        <Wrapper color={color}>
            <div className="ldsEllipsis" role="progressbar">
                <div></div><div></div><div></div><div></div>
            </div>
        </Wrapper>
    );
};

type ProgressBarProps = {
    readonly color?: string;
};

ProgressBar.defaultProps = {
    color: 'black'
};

export default ProgressBar;
