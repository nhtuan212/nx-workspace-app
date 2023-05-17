import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const ImageComponent: React.FC<ImageProps> = ({
    src,
    className,
    priority,
    title,
    alt,
}) => {
    // Variables
    const [imgWidth, setImgWidth] = useState<number>(0);
    const [imgHeight, setImgHeight] = useState<number>(0);

    // Functions
    const onLoadImage = (event: any) => {
        setImgWidth(event.target.naturalWidth);
        setImgHeight(event.target.naturalHeight);
    };

    return (
        <Image
            className={className}
            src={src}
            alt={alt || 'Image'}
            title={title}
            width={imgWidth}
            height={imgHeight}
            sizes="100mw"
            loading={!priority ? 'lazy' : undefined}
            priority={priority}
            onLoad={onLoadImage}
        />
    );
};

export default ImageComponent;
