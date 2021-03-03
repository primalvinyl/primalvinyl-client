import React from 'react';
import { Transition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';

const LazyLoadElement = ({
    height,
    offset,
    duration,
    children
}: LazyLoadElementProps): React.ReactElement => {
    //default value should be false
    //but that causes a bug so for now it is true
    const [hasLoaded, setHasLoaded] = React.useState(true);

    const containerStyle = {
        transition: `opacity ease-in-out ${duration}ms`,
        opacity: 0,
        width: '100%',
        height: '100%'
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
        unmounted: { opacity: 0 }
    };

    return (
        <LazyLoad height={height} offset={offset}>
            <Transition in={hasLoaded} timeout={duration ? duration : 300}>
                {state => (
                    <div style={{ ...containerStyle, ...transitionStyles[state] }}>
                        {children && children(setHasLoaded(true))}
                    </div>
                )}
            </Transition>
        </LazyLoad>
    );
};

type LazyLoadElementProps = {
    readonly height?: number;
    readonly offset?: number;
    readonly duration?: number;
    readonly children: Function;
};

LazyLoadElement.defaultProps = {
    height: 100,
    offset: 150,
    duration: 300
};

export default LazyLoadElement;
