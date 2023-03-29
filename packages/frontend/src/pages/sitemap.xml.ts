import { HTTP_CODE } from '@/constants';
import { isEmpty } from 'lodash';

const EXTERNAL_DATA_URL = 'https://61dd3beff60e8f0017668670.mockapi.io/';

const handleSitemapItem = (url: string) => {
    return `
		<url>
			<loc>${url}</loc>
			<lastmod>${new Date().toISOString()}</lastmod>
			<changefreq>monthly</changefreq>
			<priority>1.0</priority>
		</url>
	`;
};

const handleSitemapArray = (props: any) => {
    return `
		${props
            .map((postItem: any) => {
                return handleSitemapItem(`${postItem}`);
            })
            .join('')}
	`;
};

const generateSiteMap = (...props: []) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<!--We manually set the two URLs we know already-->
			${!isEmpty(props) ? handleSitemapArray(props) : []}
		</urlset>
	`;
};

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res }: any) {
    const BASE_URL = req.headers.host;

    // Call API
    const menuApi = await fetch(EXTERNAL_DATA_URL + 'menus').then(response => {
        if (response?.status === HTTP_CODE.SUCCESS) {
            return response.json();
        }
    });
    const productApi = await fetch(EXTERNAL_DATA_URL + 'products').then(
        response => {
            if (response?.status === HTTP_CODE.SUCCESS) {
                return response.json();
            }
        }
    );

    // Auto Sitemap Paths
    const dynamicPaths: string[] = [
        ...menuApi.map((item: any) => `${BASE_URL}/${item?.slug}`),
        ...productApi.map((item: any) => `${BASE_URL}/${item?.slug}`),
    ];

    // Generate the XML sitemap with the api data
    const sitemap = generateSiteMap(...(dynamicPaths as []));

    res.setHeader('Content-Type', 'text/xml');
    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
