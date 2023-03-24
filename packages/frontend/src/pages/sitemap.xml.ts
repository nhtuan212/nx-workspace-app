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

const generateSiteMap = (...props: any) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<!--We manually set the two URLs we know already-->
			${handleSitemapArray(props)};
		</urlset>
	`;
};

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res }: any) {
    const BASE_URL = req.headers.host;

    // We make an API call to gather the URLs for our site
    const menuApi = await fetch(EXTERNAL_DATA_URL + 'menus');
    const menuResponse = await menuApi.json();

    // Auto Sitemap Paths
    const dynamicPaths: [] = menuResponse.map(
        (item: any) => `${BASE_URL}/${item?.slug}`,
    );
    const responseAllPaths = [...dynamicPaths];

    // We generate the XML sitemap with the api data
    const sitemap = generateSiteMap(...responseAllPaths);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
