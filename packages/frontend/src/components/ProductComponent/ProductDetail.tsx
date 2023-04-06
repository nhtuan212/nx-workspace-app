import React from 'react';
import ImageComponent from '@components/ImageComponent';

const ProductDetail = (props: any) => {
    // Destructuring
    const { name, thumbnail, price, description } = props?.data || {};

    return (
        <div className="container">
            <div className="d-flex flex-wrap">
                <div className="sm:col-6 px-1">
                    <ImageComponent src={thumbnail} title={name} alt={name} />
                </div>
                <div className="sm:col-6 px-1">
                    <p className="title">{name}</p>
                    <div className="price mb-1">{price}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
