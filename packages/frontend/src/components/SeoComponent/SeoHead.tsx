import React from 'react';
import Head from 'next/head';

const SeoHead = (props: any) => {
    return (
        <>
            <Head>
                {/* Meta Viewport */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* <meta name="robots" content="index,follow" /> */}
                {/* <meta name="author" content="" /> */}
                {/* <meta name="copyright" content="" /> */}

                {/* <link href="/favicon_TGDD.ico" rel="shortcut icon" type="image/x-icon" />
				<link href="/favicon_TGDD.ico" rel="apple-touch-icon" />
				<link href="/favicon_TGDD.ico" rel="apple-touch-icon-precomposed" /> */}

                {/* Meta Seo Web */}
                <title>{props?.data?.seoTitle}</title>
                <meta name="keywords" content={props?.data?.seoKeywords} />
                <meta
                    name="description"
                    content={props?.data?.seoDescription}
                />

                {/* Meta Facebook */}
                {/* <meta property="og:type" content="website" /> */}
                {/* <meta property="og:site_name" content="Qini" /> */}
                {/* <meta property="og:image" content="Photo" /> */}
                {/* <meta property="og:image:width" content="<?=$seo->Get('width')?>" /> */}
                {/* <meta property="og:image:height" content="<?=$seo->Get('height')?>" /> */}
                {/* <meta property="og:title" content="<?=$seo->Get('title')?>" /> */}
                {/* <meta property="og:description" content="<?=$seo->Get('description')?>" /> */}
                {/* <meta property="og:url" content="<?=$seo->Get('url')?>" /> */}
            </Head>
        </>
    );
};

export default SeoHead;
