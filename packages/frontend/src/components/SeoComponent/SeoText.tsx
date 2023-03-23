import React from 'react';

const SeoText = (props: any) => {
    return (
        <>
            <h1 className="seo-h">{props?.data?.seoTitle}</h1>
            <div
                className="seo-metadata-text seo-h"
                dangerouslySetInnerHTML={{
                    __html: props?.data?.seoDescription || '',
                }}
            />
        </>
    );
};

export default SeoText;
