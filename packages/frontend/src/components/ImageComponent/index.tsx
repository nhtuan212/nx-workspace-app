import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { imageInterface } from '@/interface';

const ImageComponent = ({
    className,
    src,
    title,
    width,
    height,
    alt = 'Image',
    objectFit = 'contain',
    objectPosition = 'center',
}: imageInterface) => {
    // Setup ClassName
    const slideClassName = classNames('relative w-100 h-100', className);

    // Variables
    const [slideHeight, setSlideHeight] = useState<number>(0);

    const slideStyle = !width && { height: slideHeight };

    // Functions
    const handleImageLoad = (event: any) => {
        const imageHeight = event.target.naturalHeight;
        setSlideHeight(imageHeight);
    };

    return (
        <div className={slideClassName} style={{ ...slideStyle }}>
            <Image
                src={src as string}
                alt={alt}
                title={title}
                width={width}
                height={height}
                fill={!width}
                style={{ objectFit: objectFit, objectPosition: objectPosition }}
                sizes="100mw"
                loading={!width ? 'lazy' : undefined}
                priority={!!width}
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default ImageComponent;
