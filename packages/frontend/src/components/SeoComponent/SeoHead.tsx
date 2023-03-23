import React from 'react';
import Head from 'next/head';

const SeoHead = (props: any) => {
    const favicon = '/favicon.ico';
    const nameSeo = 'Qini thời trang nữ Quảng Châu';
    const descriptionSeo =
        'Qini chuyên thời trang, phụ kiện nữ Quảng Châu. Hàng mới luôn về';

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta name="robots" content="index,follow" />
                <meta name="author" content={nameSeo} />
                <meta name="copyright" content={nameSeo} />

                <link rel="canonical" href={props?.data?.resolvedUrl} />
                <link rel="icon" href={favicon} />
                <link rel="shortcut icon" type="image/x-icon" href={favicon} />
                <link rel="apple-touch-icon" href={favicon} />
                <link rel="apple-touch-icon-precomposed" href={favicon} />

                <title>{props?.data?.seoTitle}</title>
                <meta
                    name="description"
                    content={props?.data?.seoDescription}
                />

                {/* Meta Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={nameSeo} />
                <meta
                    property="og:title"
                    content={props?.data?.title || nameSeo}
                />
                <meta
                    property="og:description"
                    content={props?.data?.description || descriptionSeo}
                />
                <meta property="og:url" content={props?.data?.resolvedUrl} />
                {/* <meta property="og:image" content="Photo" /> */}
                {/* <meta property="og:image:width" content="<?=$seo->Get('width')?>" /> */}
                {/* <meta property="og:image:height" content="<?=$seo->Get('height')?>" /> */}

                <meta name="theme-color" content="#ffffff" />
            </Head>
        </>
    );
};

export default SeoHead;
