import React from "react";
import LazyLoad from "react-lazyload";
import { Transition } from "react-transition-group";

const getStyle = ({ duration, easing = 'ease-in-out' }: any) => ({
    transition: `opacity ${duration}ms ${easing}`,
    opacity: 0,
    display: 'inline-block',
    height: '100%'
});

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 }
};

const LazyLoadElement = (props: LazyLoadElementProps) => {
    const [loaded, setLoaded] = React.useState(false);
    const onLoad = () => setLoaded(true);

    const {
        height,
        duration = 300,
        easing,
        children,
        offset,
        ...restProps } = props;

    return (
        <LazyLoad
            height={height}
            style={{ height: '100%' }}
            offset={typeof offset === "undefined" ? 150 : offset}
            {...restProps}
        >
            <Transition in={loaded} timeout={duration}>
                {state => (
                    <div
                        style={{
                            ...getStyle({duration, easing}),
                            ...transitionStyles[state]
                        }}
                    >
                        {children && children(onLoad)}
                    </div>
                )}
            </Transition>
        </LazyLoad>
    );
}

type LazyLoadElementProps = {
    readonly height?: number;
    readonly offset?: number;
    readonly duration?: number;
    readonly style?: string;
    readonly easing?: string;
    readonly children: Function;
};

export default LazyLoadElement;
