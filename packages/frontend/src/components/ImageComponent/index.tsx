import React, { useState } from 'react';
import Image from 'next/image';
import { imageInterface } from '@/interface';
const ImageComponent = ({
    src,
    title,
    width,
    height,
    alt = 'Image',
    objectFit = 'contain',
    objectPosition = 'center',
}: imageInterface) => {
    // Variables
    const [slideWidth, setSlideWidth] = useState<number>(0);
    const [slideHeight, setSlideHeight] = useState<number>(0);

    // Functions
    const handleImageLoad = (event: any) => {
        const imageHeight = event.target.naturalHeight;
        const imageWidth = event.target.naturalWidth;
        setSlideHeight(imageHeight);
        setSlideWidth(imageWidth);
    };

    return (
        <Image
            src={src as string}
            alt={alt}
            title={title}
            width={width || slideWidth}
            height={height || slideHeight}
            style={{ objectFit: objectFit, objectPosition: objectPosition }}
            sizes="100mw"
            loading="lazy"
            onLoad={handleImageLoad}
        />
    );
};

export default ImageComponent;
