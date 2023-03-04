import React from 'react';
import Image from 'next/image';
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
    return (
        <div className="relative w-100 h-100">
            <Image
                className={className}
                src={src as string}
                alt={alt}
                title={title}
                width={width}
                height={height}
                fill={!width}
                style={
                    !width ? { objectFit: objectFit, objectPosition: objectPosition } : undefined
                }
                sizes={
                    !width ? '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' : undefined
                }
                loading={!width ? 'lazy' : undefined}
                priority={!!width}
            />
        </div>
    );
};

export default ImageComponent;
