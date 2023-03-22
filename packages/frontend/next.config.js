/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ucarecdn.com',
			},
			{
				protocol: 'http',
				hostname: 'via.placeholder.com',
			},
            {
                protocol: 'https',
				hostname: 'i.dummyjson.com',
            },
        ],
    },
};

// Check export home page static
if (!STATUS_EXPORT_SSR) {
	nextConfig['exportPathMap'] = () => {
		return {
			'/': { page: '/' }
		}
	}
}

module.exports = nextConfig;
