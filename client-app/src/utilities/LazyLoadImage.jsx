import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

const LazyLoadImage = ({ src, alt, width, height, offset, className }) => {

    return (
        <LazyLoad offset={offset}>
            <img
                src={src}
                alt={alt}
                className={className}
                width={width}
                height={height}
            />
        </LazyLoad>
    );
};

LazyLoadImage.protoTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

LazyLoadImage.defaultProps = {
    src: '',
    alt: '',
    className: undefined,
    width: undefined,
    height: undefined,
};

export default LazyLoadImage;
