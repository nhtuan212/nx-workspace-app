import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { imageInterface } from '@/interface';

const ImageComponent = ({
    id,
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

    return (
        <div className={slideClassName}>
            {/* <div className="relative w-100 h-100"> */}
            <Image
                id={id}
                // className={className}
                src={src as string}
                alt={alt}
                title={title}
                width={width}
                height={height}
                // fill={!width}

                fill
                style={{ objectFit: objectFit, objectPosition: objectPosition }}
                sizes="100vw"
                loading="lazy"

                // style={
                //     !width ? { objectFit: objectFit, objectPosition: objectPosition } : undefined
                // }
                // sizes={
                //     !width ? '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' : undefined
                // }
                // loading={!width ? 'lazy' : undefined}
                // priority={!!width}
            />
        </div>
    );
};

export default ImageComponent;
