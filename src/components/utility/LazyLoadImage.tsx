import React from 'react';
import { Transition } from 'react-transition-group';
import LazyLoad from 'react-lazyload';

const LazyLoadImage = ({
    src,
    alt,
    className,
    offset,
    duration
}: LazyLoadType): React.ReactElement => {

    const [hasLoaded, setHasLoaded] = React.useState(false);
    const containerStyle = {
        transition: `opacity ease-in-out ${duration}ms`,
        opacity: 0,
        width: '100%'
    }
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto'
    };
    const transitionStyle = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
        unmounted: { opacity: 0 }
    };

    return (
        <LazyLoad
            offset={offset}
            classNamePrefix={className}
        >
            <Transition in={hasLoaded} timeout={duration}>
                {state => (
                    <div style={{ ...containerStyle, ...transitionStyle[state] }}>
                        <img
                            width="3000"
                            height="3000"
                            src={src}
                            alt={alt}
                            onLoad={() => setHasLoaded(true)}
                            style={imageStyle}
                        />
                    </div>
                )}
            </Transition>
        </LazyLoad>
    );
};

type LazyLoadType = {
    readonly src: string;
    readonly alt: string;
    readonly className: string;
    readonly offset: number,
    readonly duration: number
};

LazyLoadImage.defaultProps = {
    src: '',
    alt: '',
    className: undefined,
    offset: 150,
    duration: 300
};

export default LazyLoadImage;
