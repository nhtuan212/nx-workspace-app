import React, { useState } from 'react';
import Image from 'next/image';
import { imageInterface } from '@/interface';
const ImageComponent = ({
    src,
    title,
    priority,
    alt = 'Image',
    objectFit = 'contain',
    objectPosition = 'center',
}: imageInterface) => {
    // Variables
    const [slideWidth, setSlideWidth] = useState<number>(0);
    const [slideHeight, setSlideHeight] = useState<number>(0);

    // Functions
    const handleImageLoad = (event: any) => {
        const imageWidth = event.target.naturalWidth;
        const imageHeight = event.target.naturalHeight;
        setSlideWidth(imageWidth);
        setSlideHeight(imageHeight);
    };

    return (
        <Image
            src={src as string}
            alt={alt}
            title={title}
            width={slideWidth}
            height={slideHeight}
            style={{ objectFit: objectFit, objectPosition: objectPosition }}
            sizes="100mw"
            loading={!priority ? 'lazy' : undefined}
            priority={priority}
            onLoad={handleImageLoad}
        />
    );
};

export default ImageComponent;
