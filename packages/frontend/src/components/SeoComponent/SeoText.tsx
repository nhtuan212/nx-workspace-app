import React from 'react';

const SeoText = (props: any) => {
    return (
        <>
			<h1 className='seo-head'>{props?.data?.seoTitle}</h1>
            <div
				className='seo-head seo-metadata-text'
                dangerouslySetInnerHTML={{
                    __html: props?.data?.seoDescription || '',
                }}
            />
        </>
    );
};

export default SeoText;
