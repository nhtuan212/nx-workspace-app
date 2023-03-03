import React from 'react';
import { imageInterface } from '@/interface';

const Image = ({ className, src, alt, width, height, title }: imageInterface) => {
    return (
        <img
            className={className}
            // style={{ ...styleImage, ...style }}
            src={src}
            // onLoad={handleOnLoaded}
            // onError={handleOnError}
            alt={alt || 'Image'}
            title={title}
            width={width || '100%'}
            height={height || 'auto'}
        />
    );
};

export default Image;
